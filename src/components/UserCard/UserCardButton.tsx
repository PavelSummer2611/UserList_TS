type ButtonProps = {
	label: string;
	onClick: () => void;
	className?: string;
	type?: "button" | "submit" | "reset";
};

export default function UserCardButton({
	label,
	onClick,
	className = "",
	type = "button",
}: ButtonProps) {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`${className} text-sm px-2 py-1 rounded cursor-pointer `}
		>
			{label}
		</button>
	);
}
