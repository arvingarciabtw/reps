export default function ViewAllDecksSkeleton() {
	return (
		<>
			<div className="h-10 w-32 animate-pulse rounded-md bg-(--color-gray-700)" />

			<div className="mt-4 mb-10 flex max-w-lg flex-col gap-3">
				<div className="h-5 w-full animate-pulse rounded-md bg-(--color-gray-700)" />
				<div className="h-5 w-4/5 animate-pulse rounded-md bg-(--color-gray-700)" />
			</div>

			<section className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3">
				{[...Array(6)].map((_, index) => (
					<article
						key={index}
						className="flex h-14.5 animate-pulse items-center justify-between gap-6 rounded-xl bg-(--color-gray-700) p-4 pl-5"
					></article>
				))}
			</section>
		</>
	);
}
