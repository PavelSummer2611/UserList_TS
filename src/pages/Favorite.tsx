import { useContext, useState } from "react";
import UserCard from "../components/UserCard/UserCard";
import { FavoritesContext } from "../context/FavoritesContext";
import NewUserModal from "../components/NewUserModal/NewUserModal";
import type { User } from "../types/types";
import { AddUserButton } from "../components/FavoritePage/AddUserButton";
import { SearchInput } from "../components/FavoritePage/SearchInput";

export default function Favorite() {
	const { favorites } = useContext(FavoritesContext)!;

	const [isOpenModal, setIsOpenModal] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [editableUser, setEditableUser] = useState<User | null>(null);

	const filteredFavorites = favorites.filter((user) => {
		const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
		return fullName.includes(searchQuery.toLowerCase());
	});

	return (
		<main>
			{isOpenModal && (
				<NewUserModal
					user={editableUser}
					onClose={() => {
						setIsOpenModal(false);
						setEditableUser(null);
					}}
				/>
			)}

			<div className="flex flex-col justify-center px-5">
				<AddUserButton
					onClick={() => {
						setEditableUser(null);
						setIsOpenModal(true);
					}}
				/>
				<SearchInput
					value={searchQuery}
					onChange={setSearchQuery}
				/>
			</div>

			<div className="flex flex-wrap justify-center gap-4">
				{filteredFavorites.map((user) => (
					<UserCard
						key={user.login.uuid}
						context={"favoriteUsers"}
						openModalForEdit={(user) => {
							setEditableUser(user);
							setIsOpenModal(true);
						}}
						{...user}
					/>
				))}
			</div>
		</main>
	);
}
