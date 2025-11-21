export function AddUserButton({ onClick }: { onClick: () => void }) {
	return (
		<button
			onClick={onClick}
			className="self-center text-sm px-2 py-1 mb-5 bg-yellow-900 rounded hover:bg-yellow-700 cursor-pointer"
		>
			Добавить пользователя
		</button>
	);
}
