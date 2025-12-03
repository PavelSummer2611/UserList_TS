import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";

export function SearchInput({
	value,
	onChange,
	delay = 500,
}: {
	value: string;
	onChange: (v: string) => void;
	delay?: number;
}) {
	const [localValue, setLocalValue] = useState(value);
	const debouncedValue = useDebounce(localValue, delay);

	useEffect(() => {
		onChange(debouncedValue);
	}, [debouncedValue, onChange]);

	return (
		<input
			type="search"
			value={localValue}
			onChange={(e) => setLocalValue(e.target.value)}
			placeholder="поиск пользователя"
			className="bg-pink-300 self-center rounded-2xl w-full min-w-[50px] max-w-[700px] px-3 p-1 mb-3 placeholder-gray-500 text-black"
		/>
	);
}
