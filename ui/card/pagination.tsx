import Link from "next/link";
import { ChevronLeft, ChevronRight } from "react-feather";

export default function Pagination({
	currentPage,
	totalPages,
	deckId,
}: {
	currentPage: number;
	totalPages: number;
	deckId: string;
}) {
	if (totalPages <= 1) return null;

	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

	const getVisiblePages = () => {
		if (totalPages <= 7) return pages;

		if (currentPage <= 4) return [...pages.slice(0, 5), "...", totalPages];
		if (currentPage >= totalPages - 3) return [1, "...", ...pages.slice(-5)];

		return [
			1,
			"...",
			currentPage - 1,
			currentPage,
			currentPage + 1,
			"...",
			totalPages,
		];
	};

	const visiblePages = getVisiblePages();

	return (
		<div className="mb-8 flex items-center justify-center gap-3">
			<Link
				href={`/deck/${deckId}/view?page=${currentPage - 1}`}
				className={`dark:text-(--color-gray-300) ${currentPage === 1 ? "pointer-events-none opacity-25" : ""}`}
			>
				<ChevronLeft className="h-5 w-5" />
			</Link>

			{visiblePages.map((page, index) =>
				page === "..." ? (
					<span key={`ellipsis-${index}`} className="px-2">
						...
					</span>
				) : (
					<Link
						key={page}
						href={`/deck/${deckId}/view?page=${page}`}
						className={`rounded-md px-2.5 py-px ${
							currentPage === page
								? "bg-(--color-primary) text-(--color-black) dark:text-(--color-black)"
								: "ease transition duration-300 hover:bg-(--color-gray-100) dark:text-(--color-gray-300) dark:hover:bg-(--color-gray-700)"
						}`}
					>
						{page}
					</Link>
				),
			)}

			<Link
				href={`/deck/${deckId}/view?page=${currentPage + 1}`}
				className={`dark:text-(--color-gray-300) ${currentPage === totalPages ? "pointer-events-none opacity-25" : ""}`}
			>
				<ChevronRight className="h-5 w-5" />
			</Link>
		</div>
	);
}
