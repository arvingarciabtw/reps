export default function Loading() {
	return (
		<div className="mx-auto my-auto flex w-full flex-col text-center text-(--color-gray-300)">
			{/* Header text skeleton */}
			<div className="flex w-full max-w-120 flex-col items-center gap-3 self-center">
				<div className="h-5 w-full animate-pulse rounded-md bg-(--color-gray-700)" />
				<div className="mx-auto h-5 w-3/4 animate-pulse rounded-md bg-(--color-gray-700)" />
			</div>

			<div className="flex flex-col">
				{/* Buttons skeleton */}
				<div className="mt-4 mb-6 flex items-center gap-4 self-center">
					<div className="h-10 w-28 animate-pulse rounded-lg bg-(--color-gray-700)" />
					<div className="h-10 w-28 animate-pulse rounded-lg bg-(--color-gray-700)" />
				</div>

				<div className="flex flex-col gap-4 sm:flex-row">
					{/* Input section skeleton */}
					<div className="flex flex-col gap-4 sm:flex-1">
						{/* Front input skeleton */}
						<section className="flex flex-col gap-3 sm:flex-1">
							<div className="h-5 w-16 animate-pulse self-start rounded-md bg-(--color-gray-700)" />
							<div className="min-h-50 w-full animate-pulse rounded-lg bg-(--color-gray-700) sm:min-h-25" />
						</section>

						{/* Back input skeleton */}
						<section className="flex flex-col gap-3 sm:flex-1">
							<div className="h-5 w-16 animate-pulse self-start rounded-md bg-(--color-gray-700)" />
							<div className="min-h-50 w-full animate-pulse rounded-lg bg-(--color-gray-700) sm:min-h-25" />
						</section>
					</div>

					{/* Output/Card section skeleton */}
					<section className="flex w-full flex-1 flex-col gap-3 self-stretch">
						<div className="h-5 w-20 animate-pulse self-start rounded-md bg-(--color-gray-700)" />
						<div className="min-h-50 flex-1 animate-pulse rounded-lg bg-(--color-gray-700)" />
					</section>
				</div>
			</div>
		</div>
	);
}
