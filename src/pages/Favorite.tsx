import { useContext, useState } from "react";
import UserCard from "../components/UserCard/UserCard";
import { FavoritesContext } from "../context/FavoritesContext";
import NewUserModal from "../components/NewUserModal/NewUserModal";
import type { User } from "../types/types";

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
				<button
					onClick={() => {
						setEditableUser(null);
						setIsOpenModal(true);
					}}
					className="self-center text-sm px-2 py-1 mb-5 bg-yellow-900
                     rounded hover:bg-yellow-700 cursor-pointer"
				>
					Добавить пользователя
				</button>
				<input
					type="search"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					placeholder="поиск пользователя"
					className="bg-pink-300 self-center rounded-2xl w-full min-w-[50px] 
               max-w-[700px] px-3 p-1 mb-3 placeholder-gray-500 text-black"
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
