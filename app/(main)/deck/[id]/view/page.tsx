import { fetchDeck, fetchCards } from "@/lib/queries";
import type { CardType } from "@/lib/definitions";
import type { DeckType } from "@/lib/definitions";
import { Edit2, Plus } from "react-feather";
import DeleteCard from "@/ui/card/delete-card";
import Link from "next/link";
import Pagination from "@/ui/card/pagination";
import { Suspense } from "react";
import Skeleton from "@/ui/skeletons/skeleton-view-cards";

export default async function ViewCardsPage({
	params,
	searchParams,
}: {
	params: Promise<{ id: string }>;
	searchParams: Promise<{ page?: string }>;
}) {
	const { id } = await params;
	const { page } = await searchParams;

	const deck = await fetchDeck(id);
	if (!deck) return <p>Deck not found.</p>;

	const currentPage = Number(page) || 1;
	const pageSize = 10;

	return (
		<div className="grid flex-1 place-items-center">
			<Suspense key={`${id}-${currentPage}`} fallback={<Skeleton />}>
				<CardsContent
					deckId={id}
					deck={deck}
					currentPage={currentPage}
					pageSize={pageSize}
				/>
			</Suspense>
		</div>
	);
}

async function CardsContent({
	deckId,
	deck,
	currentPage,
	pageSize,
}: {
	deckId: string;
	deck: DeckType;
	currentPage: number;
	pageSize: number;
}) {
	const { cards, totalCount, totalPages } = await fetchCards(
		deckId,
		currentPage,
		pageSize,
	);

	if (!cards) return <p>Cards not found.</p>;

	return totalCount === 0 ? (
		<NoCards deck={deck} />
	) : (
		<div className="h-full w-full self-start justify-self-start">
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				deckId={deckId}
			/>
			<Header id={deckId} />
			<CardsList
				cards={cards}
				currentPage={currentPage}
				pageSize={pageSize}
				deck={deck}
				id={deckId}
			/>
		</div>
	);
}

function NoCards({ deck }: { deck: { id: string; title: string } }) {
	return (
		<div className="flex flex-col items-center gap-4">
			<p className="max-w-3xs text-center text-(--color-gray-600) dark:text-(--color-gray-300)">
				No cards yet in your{" "}
				<Link
					href={`/deck/${deck.id}`}
					className="text-(--color-primary) underline hover:no-underline"
				>
					{deck.title}
				</Link>{" "}
				deck. Add some cards now!
			</p>
			<Link href={`/deck/${deck.id}/create`}>
				<button className="ease cursor-pointer rounded-2xl border border-(--color-gray-700) bg-(--color-gray-800) px-5 py-2 text-(--color-white) transition duration-300 hover:opacity-75 dark:text-(--color-gray-300)">
					Add cards
				</button>
			</Link>
		</div>
	);
}

function Header({ id }: { id: string }) {
	return (
		<div className="mb-2 grid grid-cols-[20px_1fr_1fr_20px_20px] items-center gap-4 border-b border-dashed border-(--color-gray-700) pb-4 text-(--color-gray-600) dark:text-(--color-gray-300)">
			<p>#</p>
			<p>Front</p>
			<p>Back</p>
			<span></span>
			<Link
				aria-label="Redirect to create card page"
				href={`/deck/${id}/create`}
			>
				<Plus className="ease h-5 w-5 transition duration-300 hover:text-(--color-gray-300) dark:hover:text-(--color-primary)" />
			</Link>
		</div>
	);
}

function CardsList({
	cards,
	currentPage,
	pageSize,
	deck,
	id,
}: {
	cards: CardType[];
	currentPage: number;
	pageSize: number;
	deck: DeckType;
	id: string;
}) {
	return (
		<div className="flex flex-col gap-8 pt-4 xs:gap-2">
			{cards.map((card, index) => {
				const globalIndex = (currentPage - 1) * pageSize + index + 1;
				return (
					<div
						key={card.id}
						className="flex grid-cols-[20px_1fr_1fr_20px_20px] flex-col items-center gap-4 border-b border-dashed border-(--color-gray-700) pb-4 text-(--color-gray-600) xs:grid dark:text-(--color-gray-300)"
					>
						<div className="flex w-full justify-between xs:hidden">
							<p>{globalIndex}</p>
							<div className="flex items-center gap-3">
								<Link
									aria-label="Redirect to update card page"
									href={`/deck/${id}/update/${card.id}`}
								>
									<Edit2 className="ease h-4 w-4 transition duration-300 hover:stroke-(--color-primary)" />
								</Link>
								<DeleteCard cardId={card.id} deckId={deck.id} />
							</div>
						</div>
						<p className="hidden xs:block">{globalIndex}</p>
						<p>{card.front}</p>
						<p>{card.back}</p>
						<Link
							aria-label="Redirect to update card page"
							href={`/deck/${id}/update/${card.id}`}
							className="hidden xs:block"
						>
							<Edit2 className="ease h-4 w-4 transition duration-300 hover:stroke-(--color-gray-300) dark:hover:stroke-(--color-primary)" />
						</Link>
						<div className="hidden xs:grid xs:place-items-center">
							<DeleteCard cardId={card.id} deckId={deck.id} />
						</div>
					</div>
				);
			})}
		</div>
	);
}
