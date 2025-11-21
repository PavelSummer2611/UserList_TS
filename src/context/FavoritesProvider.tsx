import { useEffect, useState, type ReactNode } from "react";
import type { User } from "../types/types";
import { FavoritesContext } from "./FavoritesContext";

export function FavoritesProvider({ children }: { children: ReactNode }) {
	const [favorites, setFavorites] = useState<User[]>(() => {
		const savedUsers = localStorage.getItem("users");
		return savedUsers ? JSON.parse(savedUsers) : [];
	});

	useEffect(() => {
		const savedUsers = localStorage.getItem("users");

		if (savedUsers) {
			setFavorites(JSON.parse(savedUsers));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("users", JSON.stringify(favorites));
	}, [favorites]);

	const addToFavorites = (user: User) => {
		if (!favorites.find((fav) => fav.login.uuid === user.login.uuid)) {
			setFavorites([...favorites, user]);
		}
	};

	const removeFromFavorites = (id: string) => {
		setFavorites(favorites.filter((fav) => fav.login.uuid !== id));
	};

	const updateUser = (updatedUser: User) => {
		setFavorites(prev =>
			prev.map(u => u.login.uuid === updatedUser.login.uuid ? updatedUser : u)
		);
	};

	return (
		<FavoritesContext.Provider
			value={{ favorites, addToFavorites, removeFromFavorites, updateUser }}
		>
			{children}
		</FavoritesContext.Provider>
	);
}
