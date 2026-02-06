export default function Loading() {
	return (
		<div className="flex flex-col gap-8">
			<section className="flex items-center gap-4">
				<span className="h-20 w-full max-w-20 animate-pulse rounded-full bg-(--color-gray-200) dark:bg-(--color-gray-700)" />
				<div className="flex flex-col gap-3">
					<span className="h-5 w-50 animate-pulse rounded-md bg-(--color-gray-200) dark:bg-(--color-gray-700)"></span>
					<p className="h-5 w-50 animate-pulse rounded-md bg-(--color-gray-200) dark:bg-(--color-gray-700)"></p>
				</div>
			</section>

			<div className="flex w-full flex-col gap-4">
				<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
					<div className="flex flex-col gap-2">
						<span className="h-5 w-30 animate-pulse rounded-md bg-(--color-gray-200) dark:bg-(--color-gray-700)"></span>
						<div className="flex flex-wrap gap-4 text-sm text-gray-500">
							<span className="h-4 w-30 animate-pulse rounded-sm bg-(--color-gray-200) dark:bg-(--color-gray-700)"></span>
							<span className="h-4 w-30 animate-pulse rounded-sm bg-(--color-gray-200) dark:bg-(--color-gray-700)"></span>
							<span className="h-4 w-30 animate-pulse rounded-sm bg-(--color-gray-200) dark:bg-(--color-gray-700)"></span>
						</div>
					</div>

					<div className="h-9 w-24 animate-pulse rounded-md bg-(--color-gray-200) dark:bg-(--color-gray-700)"></div>
				</div>

				<div className="h-37 animate-pulse overflow-x-auto rounded-lg bg-(--color-gray-200) pb-2 dark:bg-(--color-gray-700)">
					<div className="inline-flex min-w-fit gap-3"></div>
				</div>

				<div className="h-4 w-35 animate-pulse rounded-sm bg-(--color-gray-200) dark:bg-(--color-gray-700)"></div>
			</div>
		</div>
	);
}
