export default function ViewDeckSkeleton() {
	return (
		<div className="flex flex-1 flex-col items-center justify-center gap-4 text-(--color-gray-300)">
			<div className="flex flex-col items-center gap-3">
				<span className="h-5 w-80 animate-pulse rounded-md bg-(--color-gray-200) dark:bg-(--color-gray-700)"></span>
				<span className="h-5 w-70 animate-pulse rounded-md bg-(--color-gray-200) dark:bg-(--color-gray-700)"></span>
			</div>
			<div className="flex justify-center gap-4">
				<span className="h-10.5 w-29.5 animate-pulse rounded-lg bg-(--color-gray-200) dark:bg-(--color-gray-700)"></span>
				<span className="h-10.5 w-23 animate-pulse rounded-lg bg-(--color-gray-200) dark:bg-(--color-gray-700)"></span>
			</div>
		</div>
	);
}
