import { useContext, useMemo, useState } from "react";
import { FavoritesContext } from "../context/Favorite/FavoritesContext";
import type { User } from "../types/types";
import { AddUserButton } from "../components/FavoritePage/AddUserButton";
import { SearchInput } from "../components/FavoritePage/SearchInput";
import FavoriteUserList from "../components/FavoriteUserList/FavoriteUserList";
import { ModalContext } from "../context/Modal/ModalContext";

export default function Favorite() {
	const [searchQuery, setSearchQuery] = useState("");

	const { favorites, removeFromFavorites } = useContext(FavoritesContext)!;
	const { openModal } = useContext(ModalContext);

	const filteredFavorites = useMemo(() => {
		return favorites.filter((user: User) => {
			const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
			return fullName.includes(searchQuery.toLowerCase());
		});
	}, [favorites, searchQuery]);

	return (
		<main>
			<div className="flex flex-col justify-center px-5">
				<AddUserButton onClick={() => openModal(null)} />
				<SearchInput
					value={searchQuery}
					onChange={setSearchQuery}
				/>
			</div>

			<FavoriteUserList
				users={filteredFavorites}
				onEdit={openModal}
				onDelete={removeFromFavorites}
			/>
		</main>
	);
}
