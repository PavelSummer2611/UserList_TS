export default function UserCardSkeleton() {
	return (
		<>
			{Array.from({ length: 10 }).map((_, i) => (
				<div
					key={i}
					className="w-47 h-65 p-4 bg-gray-900 rounded-md animate-pulse"
				></div>
			))}
		</>
	);
}
