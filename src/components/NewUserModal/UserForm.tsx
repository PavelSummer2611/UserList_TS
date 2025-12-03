import { useForm } from "react-hook-form";
import type { User, UserFormProps } from "../../types/types";

export function UserForm({
	defaultValues,
	onSubmit,
	onCancel,
	isEdit = false,
}: UserFormProps) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<User>({
		defaultValues,
	});

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="space-y-3"
		>
			<input
				{...register("picture.large")}
				placeholder="Ссылка на фото"
				className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
			/>

			<input
				{...register("name.first", { required: "Введите имя" })}
				placeholder="Имя"
				className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
				autoFocus
			/>
			{errors.name?.first && (
				<p className="text-red-500 text-sm">{errors.name.first.message}</p>
			)}

			<input
				{...register("name.last", { required: "Введите фамилию" })}
				placeholder="Фамилия"
				className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
			/>
			{errors.name?.last && (
				<p className="text-red-500 text-sm">{errors.name.last.message}</p>
			)}

			<input
				{...register("dob.age", {
					valueAsNumber: true,
					required: "Введите возраст",
					min: { value: 0, message: "Возраст не может быть отрицательным" },
					max: { value: 150, message: "Введите корректный возраст" },
				})}
				type="number"
				placeholder="Возраст"
				className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
			/>
			{errors.dob?.age && (
				<p className="text-red-500 text-sm">{errors.dob.age.message}</p>
			)}

			<div className="flex justify-end gap-2 mt-4">
				<button
					type="button"
					className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-600 transition cursor-pointer"
					onClick={onCancel}
				>
					Отмена
				</button>
				<button
					type="submit"
					className="px-4 py-2 text-white rounded bg-yellow-900 hover:bg-yellow-700 transition cursor-pointer"
				>
					{isEdit ? "Сохранить" : "Добавить"}
				</button>
			</div>
		</form>
	);
}
