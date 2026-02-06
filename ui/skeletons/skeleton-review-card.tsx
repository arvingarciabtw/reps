export default function ReviewCardSkeleton() {
	return (
		<div className="my-auto flex h-50 w-full flex-col items-center gap-4 self-center sm:w-104">
			<div className="relative flex h-full min-h-50 w-full max-w-104 flex-1 animate-pulse cursor-pointer flex-col overflow-y-auto rounded-lg bg-(--color-gray-200) p-4 sm:flex-1 dark:bg-(--color-gray-700)"></div>
			<div className="flex w-full max-w-104 flex-wrap items-center justify-between gap-2">
				<p className="mr-auto h-6 w-22 animate-pulse rounded-md bg-(--color-gray-200) dark:bg-(--color-gray-700)"></p>
				<div className="flex gap-4">
					<button className="h-6.5 w-6.5 animate-pulse rounded-full bg-(--color-gray-200) dark:bg-(--color-gray-700)"></button>
					<button className="h-6.5 w-6.5 animate-pulse rounded-full bg-(--color-gray-200) dark:bg-(--color-gray-700)"></button>
				</div>
			</div>
		</div>
	);
}
