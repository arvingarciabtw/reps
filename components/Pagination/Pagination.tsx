import { ChevronLeft, ChevronRight } from "react-feather";
import {
	PaginationWrapper,
	NavLink,
	PageLink,
	Ellipsis,
} from "@/components/Pagination/Pagination.style";

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
		<PaginationWrapper>
			<NavLink
				aria-label="Redirect to previous page of cards"
				href={`/deck/${deckId}/view?page=${currentPage - 1}`}
				$isDisabled={currentPage === 1}
			>
				<ChevronLeft style={{ width: "1.25rem", height: "1.25rem" }} />
			</NavLink>

			{visiblePages.map((page, index) =>
				page === "..." ? (
					<Ellipsis key={`ellipsis-${index}`}>...</Ellipsis>
				) : (
					<PageLink
						key={page}
						href={`/deck/${deckId}/view?page=${page}`}
						$isActive={currentPage === page}
					>
						{page}
					</PageLink>
				),
			)}

			<NavLink
				aria-label="Redirect to next page of cards"
				href={`/deck/${deckId}/view?page=${currentPage + 1}`}
				$isDisabled={currentPage === totalPages}
			>
				<ChevronRight style={{ width: "1.25rem", height: "1.25rem" }} />
			</NavLink>
		</PaginationWrapper>
	);
}
