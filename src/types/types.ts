export interface User {
	name: { first: string; last: string };
	dob: { age?: number };
	picture: { large: string };
	login: { uuid: string };
}

export interface FavoritesContextType {
	favorites: User[];
	addToFavorites: (user: User) => void;
	removeFromFavorites: (id: string) => void;
	updateUser: (updatedUser: User) => void
}

export type UserFormData = {
	name: { first: string; last: string };
	dob: { age: number | string };
	picture: { large: string };
	login: { uuid: string };
};