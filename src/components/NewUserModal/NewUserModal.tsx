import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { FavoritesContext } from "../../context/FavoritesContext";
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

// import { useContext, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { FavoritesContext } from "../../context/FavoritesContext";
// import type { User } from "../../types/types";
// import { v4 as uuidv4 } from "uuid";

// type Props = {
// 	onClose: () => void;
// 	user: User | null;
// };

// export default function NewUserModal({ user, onClose }: Props) {
// 	const { register, handleSubmit, reset } = useForm<User>({
// 		defaultValues: {
// 			name: { first: "", last: "" },
// 			dob: { age: undefined },
// 			picture: { large: "" },
// 			login: { uuid: uuidv4() },
// 		},
// 	});

// 	const isEdit = Boolean(user);

// 	useEffect(() => {
// 		if (user) {
// 			reset(user);
// 		} else {
// 			reset({
// 				name: { first: "", last: "" },
// 				dob: { age: undefined },
// 				picture: { large: "" },
// 				login: { uuid: uuidv4() },
// 			});
// 		}
// 	}, [user, reset]);

// 	const { addToFavorites, updateUser } = useContext(FavoritesContext)!;

// 	const onSubmit = (data: User) => {
// 		if (isEdit) {
// 			updateUser(data);
// 		} else {
// 			addToFavorites({
// 				...data,
// 				login: { uuid: uuidv4() },
// 			});
// 		}

// 		onClose();
// 	};

// 	return (
// 		<div className="fixed inset-0 flex items-center justify-center z-50">
// 			<div
// 				className="absolute inset-0 bg-black opacity-50"
// 				onClick={onClose}
// 			></div>

// 			<div className="relative bg-black border mx-5 rounded-2xl shadow-lg w-full max-w-md p-6 z-10">
// 				<button
// 					className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold cursor-pointer"
// 					onClick={onClose}
// 				>
// 					&times;
// 				</button>

// 				<h2 className="text-2xl font-semibold mb-4">Добавить пользователя</h2>

// 				<form
// 					onSubmit={handleSubmit(onSubmit)}
// 					className="space-y-3 border-white"
// 				>
// 					<input
// 						{...register("picture.large")}
// 						placeholder="Ссылка на фото"
// 						className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// 					/>
// 					<input
// 						{...register("name.first", { required: "Введите имя" })}
// 						placeholder="Имя"
// 						className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// 					/>
// 					<input
// 						{...register("name.last", { required: "Введите фамилию" })}
// 						placeholder="Фамилия"
// 						className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// 					/>
// 					<input
// 						{...register("dob.age", {
// 							valueAsNumber: true,
// 							required: "Введите возраст",
// 							min: { value: 0, message: "Возраст не может быть отрицательным" },
// 							max: { value: 150, message: "Введите корректный возраст" },
// 						})}
// 						type='number'
// 						placeholder="Возраст"
// 						className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// 					/>

// 					<div className="flex justify-end gap-2 mt-4">
// 						<button
// 							type="button"
// 							className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-600 transition cursor-pointer"
// 							onClick={onClose}
// 						>
// 							Отмена
// 						</button>
// 						<button
// 							type="submit"
// 							className="px-4 py-2  text-white rounded bg-yellow-900
//                         hover:bg-yellow-700 transition cursor-pointer"
// 						>
// 							{isEdit ? "Сохранить" : "Добавить"}
// 						</button>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// }
