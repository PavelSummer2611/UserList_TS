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
	updateUser: (updatedUser: User) => void;
}

// export type UserCardButtons = {
// 	context: "apiUsers" | "favoriteUsers";
// 	user: User;
// 	openModalForEdit?: (user: User) => void;
// 	addToFavorites: (user: User) => void;
// 	removeFromFavorites: (uuid: string) => void;
// };

export type FavoriteUserList = {
	users: User[];
	onEdit: (user: User) => void;
	onDelete: (uuid: string) => void;
};

export type UserFormProps = {
	defaultValues: User;
	onSubmit: (data: User) => void;
	onCancel: () => void;
	isEdit?: boolean;
};
