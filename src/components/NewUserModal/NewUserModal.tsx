import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { FavoritesContext } from "../../context/Favorite/FavoritesContext";
import type { User } from "../../types/types";
import { Modal } from "./Modal";
import { UserForm } from "./UserForm";

type Props = {
	user: User | null;
	onClose: () => void;
};

export default function NewUserModal({ user, onClose }: Props) {
	const { addToFavorites, updateUser } = useContext(FavoritesContext)!;
	const isEdit = Boolean(user);

	const defaultUser: User = {
		name: { first: "", last: "" },
		dob: { age: undefined },
		picture: { large: "" },
		login: { uuid: uuidv4() },
	};

	const handleSubmit = (data: User) => {
		if (isEdit) {
			updateUser(data);
		} else {
			addToFavorites({ ...data, login: { uuid: uuidv4() } });
		}
		onClose();
	};

	return (
		<Modal onClose={onClose}>
			<h2 className="text-2xl font-semibold mb-4">
				{isEdit ? "Редактировать пользователя" : "Добавить пользователя"}
			</h2>
			<UserForm
				defaultValues={user || defaultUser}
				onSubmit={handleSubmit}
				onCancel={onClose}
				isEdit={isEdit}
			/>
		</Modal>
	);
}
