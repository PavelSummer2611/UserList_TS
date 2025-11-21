import UserCard from "../components/UserCard/UserCard";
import { fetchUsers } from "../utils/api";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
	const {
		data: users,
		isLoading,
		isError,
		error,
		refetch,
	} = useQuery({
		queryKey: ["users"],
		queryFn: () => fetchUsers(10),
		staleTime: 1000 * 60,
		retry: 1,
	});

	if (isError)
		return (
			<div className="text-center mt-10">
				<p className="text-red-500">Ошибка: {(error as Error).message}</p>
				<button
					onClick={() => refetch()}
					className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
				>
					Попробовать снова
				</button>
			</div>
		);

	return (
		<main className="flex flex-wrap justify-center gap-4 p-1">
			{isLoading
				? Array.from({ length: 10 }).map((_, i) => (
						<div
							key={i}
							className="w-47 h-65 p-4 bg-gray-900 rounded-md animate-pulse"
						></div>
					))
				: users?.map((user) => (
						<UserCard
							key={user.login.uuid}
							{...user}
							context="apiUsers"
						/>
					))}
		</main>
	);
}
