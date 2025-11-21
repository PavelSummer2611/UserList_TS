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

			<UserInfo
				name={user.name}
				dob={user.dob}
			/>

			<UserCardButtons
				context={context}
				user={user}
				openModalForEdit={openModalForEdit}
				addToFavorites={addToFavorites}
				removeFromFavorites={removeFromFavorites}
			/>
		</div>
	);
}
