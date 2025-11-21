export function UserAvatar({ src }: { src?: string }) {
	if (!src) {
		return (
			<div className="flex items-center justify-center h-42 w-full bg-gray-200 text-gray-600 rounded">
				НЕТ ФОТО
			</div>
		);
	}
	return (
		<img
			src={src}
			alt="аватарка"
			className="rounded"
		/>
	);
}
