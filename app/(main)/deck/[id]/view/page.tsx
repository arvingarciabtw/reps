import styled from "styled-components";
import { Edit2, Plus } from "react-feather";
import DeleteCard from "@/ui/card/delete-card";
import Link from "next/link";
import Pagination from "@/ui/card/pagination";
import { Suspense } from "react";
import Skeleton from "@/ui/skeletons/skeleton-view-cards";
import { fetchDeck, fetchCards } from "@/lib/queries";
import type { CardType, DeckType } from "@/lib/definitions";

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
		<PageWrapper>
			<Suspense key={`${id}-${currentPage}`} fallback={<Skeleton />}>
				<CardsContent
					deckId={id}
					deck={deck}
					currentPage={currentPage}
					pageSize={pageSize}
				/>
			</Suspense>
		</PageWrapper>
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
		<ContentContainer>
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
		</ContentContainer>
	);
}

function NoCards({ deck }: { deck: { id: string; title: string } }) {
	return (
		<EmptyStateContainer>
			<EmptyText>
				No cards yet in your <Link href={`/deck/${deck.id}`}>{deck.title}</Link>{" "}
				deck. Add some cards now!
			</EmptyText>
			<Link href={`/deck/${deck.id}/create`}>
				<AddButton>Add cards</AddButton>
			</Link>
		</EmptyStateContainer>
	);
}

function Header({ id }: { id: string }) {
	return (
		<ListHeader>
			<p>#</p>
			<p>Front</p>
			<p>Back</p>
			<span />
			<Link
				aria-label="Redirect to create card page"
				href={`/deck/${id}/create`}
			>
				<Plus />
			</Link>
		</ListHeader>
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
		<CardListWrapper>
			{cards.map((card, index) => {
				const globalIndex = (currentPage - 1) * pageSize + index + 1;
				return (
					<CardRow key={card.id}>
						<MobileHeader>
							<p>{globalIndex}</p>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: "0.75rem",
								}}
							>
								<Link href={`/deck/${id}/update/${card.id}`}>
									<Edit2 className="edit-icon" />
								</Link>
								<DeleteCard cardId={card.id} deckId={deck.id} />
							</div>
						</MobileHeader>

						<DesktopOnly>
							<p>{globalIndex}</p>
						</DesktopOnly>

						<p>{card.front}</p>
						<p>{card.back}</p>

						<DesktopOnly>
							<Link href={`/deck/${id}/update/${card.id}`}>
								<Edit2 className="edit-icon" />
							</Link>
						</DesktopOnly>

						<DesktopOnly style={{ display: "grid", placeItems: "center" }}>
							<DeleteCard cardId={card.id} deckId={deck.id} />
						</DesktopOnly>
					</CardRow>
				);
			})}
		</CardListWrapper>
	);
}

const PageWrapper = styled.div`
	display: grid;
	flex: 1;
	place-items: center;
`;

const ContentContainer = styled.div`
	height: 100%;
	width: 100%;
	align-self: flex-start;
	justify-self: flex-start;
`;

const EmptyStateContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
`;

const EmptyText = styled.p`
	max-width: 15rem; /* max-w-3xs */
	text-align: center;
	color: var(--color-gray-600);

	html.dark & {
		color: var(--color-gray-300);
	}

	a {
		color: var(--color-primary);
		text-decoration: underline;
		&:hover {
			text-decoration: none;
		}
	}
`;

const GridBase = styled.div`
	display: grid;
	grid-template-columns: 20px 1fr 1fr 20px 20px;
	align-items: center;
	gap: 1rem;
`;

const ListHeader = styled(GridBase)`
	margin-bottom: 0.5rem;
	border-bottom: 1px dashed var(--color-gray-700);
	padding-bottom: 1rem;
	color: var(--color-gray-600);

	html.dark & {
		color: var(--color-gray-300);
	}

	svg {
		cursor: pointer;
		height: 1.25rem;
		width: 1.25rem;
    color: var(--color-gray-600);
		transition: color 0.3s ease;

		&:hover {
			color: var(--color-gray-300);
		}

		html.dark &:hover {
			color: var(--color-primary);
		}

    html.dark & {
      color: var(--color-gray-300);
    }
	}
`;

const CardListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem; /* gap-8 */
	padding-top: 1rem;

  & svg {
    color: var(--color-gray-600);
  }

  html.dark & svg {
    color: var(--color-gray-300);
  }

	@media (min-width: 480px) {
		gap: 0.5rem; /* xs:gap-2 */
	}
`;

const CardRow = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	border-bottom: 1px dashed var(--color-gray-700);
	padding-bottom: 1rem;
	color: var(--color-gray-600);

	@media (min-width: 480px) {
		display: grid;
		grid-template-columns: 20px 1fr 1fr 20px 20px;
	}

	html.dark & {
		color: var(--color-gray-300);
	}

	svg.edit-icon {
		height: 1rem;
		width: 1rem;
		transition: stroke 0.3s ease;
		&:hover {
			stroke: var(--color-gray-300);
		}
		html.dark &:hover {
			stroke: var(--color-primary);
		}
	}
`;

const MobileHeader = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	@media (min-width: 480px) {
		display: none;
	}
`;

const DesktopOnly = styled.div`
	display: none;
	@media (min-width: 480px) {
		display: block;
	}
`;

const AddButton = styled.button`
	cursor: pointer;
	border-radius: 1rem;
	border: 1px solid var(--color-gray-700);
	background-color: var(--color-gray-800);
	padding: 0.5rem 1.25rem;
	color: var(--color-white);
	transition: opacity 0.3s ease;

	&:hover {
		opacity: 0.75;
	}

	html.dark & {
		color: var(--color-gray-300);
	}
`;
