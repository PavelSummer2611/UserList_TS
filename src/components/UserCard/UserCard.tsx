import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import type { User } from "../../types/types";
import { UserCardButtons } from "./UserCardButtons";
import { UserAvatar } from "./UserAvatar";
import { UserInfo } from "./UserInfo";

type UserCardProps = User & {
	context: "apiUsers" | "favoriteUsers";
	openModalForEdit?: (user: User) => void;
};

export default function UserCard({
	context,
	openModalForEdit,
	...user
}: UserCardProps) {
	const { addToFavorites, removeFromFavorites } = useContext(FavoritesContext)!;

	return (
		<div
			className=" flex flex-col   gap-1 p-2 m-2 border 
			rounded shadow-sm shadow-gray-300 
			transition transform 
			duration-200 ease-in-out 
			hover:shadow-lg hover:-translate-y-1 max-w-50"
		>
			<UserAvatar src={user.picture.large} />

			{/* {user.picture?.large ? (
				<img
					src={user.picture.large}
					alt="аватарка"
					className="rounded"
				/>
			) : (
				<div className="flex items-center justify-center h-42 w-full bg-gray-200 text-gray-600 rounded">
					НЕТ ФОТО
				</div>
			)} */}

<UserInfo name={user.name} dob={user.dob} />


			{/* <div className="flex gap-1 mt-auto">
				<div>
					{user.name.first} {user.name.last}
				</div>
			</div>

			<div className="flex">
				<div className="text-sm">возраст: {user.dob.age}</div>
			</div> */}

			<UserCardButtons
				context={context}
				user={user}
				openModalForEdit={openModalForEdit}
				addToFavorites={addToFavorites}
				removeFromFavorites={removeFromFavorites}
			/>

			{/* {context === "apiUsers" && (
				<button
					onClick={() => addToFavorites(user)}
					className="text-sm px-2 py-1 bg-yellow-900 rounded hover:bg-yellow-700 cursor-pointer"
				>
					Добавить в избранное
				</button>
			)}

			{context === "favoriteUsers" && (
				<button
					onClick={() => removeFromFavorites(user.login.uuid)}
					className=" text-sm px-2 py-1 bg-yellow-900 rounded hover:bg-yellow-700 cursor-pointer"
				>
					Удалить из избранного
				</button>
			)}
			{context === "favoriteUsers" ? (
				<button
					onClick={() => {
						openModalForEdit?.(user);
					}}
					className=" text-sm px-2 py-1 bg-gray-800 rounded hover:bg-gray-500 cursor-pointer"
				>
					Изменить
				</button>
			) : null} */}
		</div>
	);
}
