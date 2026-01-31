export default function Loading() {
	return (
		<div className="grid flex-1 place-items-center">
			<div className="h-full w-full self-start justify-self-start">
				<div className="mb-2 grid grid-cols-[20px_1fr_1fr_20px_20px] items-center gap-4 border-b border-dashed border-(--color-gray-700) pb-4">
					<div className="h-5 w-5 animate-pulse rounded-full bg-(--color-gray-700)" />
					<div className="h-5 w-12 animate-pulse rounded-md bg-(--color-gray-700)" />
					<div className="h-5 w-12 animate-pulse rounded-md bg-(--color-gray-700)" />
					<span></span>
					<div className="h-5 w-5 animate-pulse rounded-full bg-(--color-gray-700)" />
				</div>
				<div className="flex flex-col gap-6 pt-4">
					{[...Array(20)].map((_, index) => (
						<div
							key={index}
							className="grid grid-cols-[20px_1fr_1fr_20px_20px] items-center gap-4 rounded-lg"
						>
							<div className="h-5 w-5 animate-pulse rounded-full bg-(--color-gray-700)" />
							<div className="h-5 w-full animate-pulse rounded-md bg-(--color-gray-700)" />
							<div className="h-5 w-full animate-pulse rounded-md bg-(--color-gray-700)" />
							<div className="h-5 w-5 animate-pulse rounded-full bg-(--color-gray-700)" />
							<div className="h-5 w-5 animate-pulse rounded-full bg-(--color-gray-700)" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
