export function SearchInput({
	value,
	onChange,
}: {
	value: string;
	onChange: (v: string) => void;
}) {
	return (
		<input
			type="search"
			value={value}
			onChange={(e) => onChange(e.target.value)}
			placeholder="поиск пользователя"
			className="bg-pink-300 self-center rounded-2xl w-full min-w-[50px] max-w-[700px] px-3 p-1 mb-3 placeholder-gray-500 text-black"
		/>
	);
}
