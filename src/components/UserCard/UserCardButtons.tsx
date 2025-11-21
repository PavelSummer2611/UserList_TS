import type { User } from "../../types/types";

export function UserCardButtons({
	context,
	user,
	openModalForEdit,
	addToFavorites,
	removeFromFavorites,
}: {
	context: "apiUsers" | "favoriteUsers";
	user: User;
	openModalForEdit?: (user: User) => void;
	addToFavorites: (user: User) => void;
	removeFromFavorites: (uuid: string) => void;
}) {
	if (context === "apiUsers") {
		return (
			<button
				onClick={() => addToFavorites(user)}
				className="text-sm px-2 py-1 bg-yellow-900 rounded hover:bg-yellow-700 cursor-pointer"
			>
				Добавить в избранное
			</button>
		);
	}

	if (context === "favoriteUsers") {
		return (
			<>
				<button
					onClick={() => removeFromFavorites(user.login.uuid)}
					className="text-sm px-2 py-1 bg-yellow-900 rounded hover:bg-yellow-700 cursor-pointer"
				>
					Удалить из избранного
				</button>
				{openModalForEdit && (
					<button
						onClick={() => openModalForEdit(user)}
						className="text-sm px-2 py-1 bg-gray-800 rounded hover:bg-gray-500 cursor-pointer"
					>
						Изменить
					</button>
				)}
			</>
		);
	}

	return null;
}
