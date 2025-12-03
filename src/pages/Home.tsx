import { useContext } from "react";
import UserCard from "../components/UserCard/UserCard";
import UserCardButton from "../components/UserCard/UserCardButton";
import { fetchUsers } from "../utils/api";
import { useQuery } from "@tanstack/react-query";
import { FavoritesContext } from "../context/Favorite/FavoritesContext";
import UserCardSkeleton from "../components/UserCard/UserCardSkeleton";

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

	const { addToFavorites } = useContext(FavoritesContext)!;

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
			{isLoading ? (
				<UserCardSkeleton />
			) : (
				users?.map((user) => (
					<UserCard
						key={user.login.uuid}
						{...user}
					>
						<UserCardButton
							label={"Добавить в избранное"}
							onClick={() => addToFavorites(user)}
							className={"bg-yellow-900  hover:bg-yellow-700"}
						/>
					</UserCard>
				))
			)}
		</main>
	);
}
