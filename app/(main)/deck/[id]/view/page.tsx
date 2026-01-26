import { fetchDeck, fetchCards } from "@/lib/queries";
import { Edit2, Plus } from "react-feather";
import DeleteCard from "@/ui/card/delete-card";
import Link from "next/link";

export default async function ViewCardsPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const deck = await fetchDeck(id);

	if (!deck) return <p>Deck not found.</p>;

	const cards = await fetchCards(id);

	if (!cards) return <p>Cards not found.</p>;

	return (
		<div className="grid flex-1 place-items-center">
			{cards.length === 0 ? (
				<NoCards deck={deck} />
			) : (
				<div className="h-full w-full self-start justify-self-start">
					<div className="mb-2 grid grid-cols-[20px_1fr_1fr_20px_20px] items-center gap-4 border-b border-dashed border-(--color-gray-700) pb-4 text-(--color-gray-300)">
						<p>#</p>
						<p>Front</p>
						<p>Back</p>
						<span></span>
						<Link href={`/deck/${id}/create`}>
							<Plus className="ease h-5 w-5 transition duration-300 hover:stroke-(--color-primary)" />
						</Link>
					</div>
					<div className="flex flex-col gap-2 pt-4">
						{cards.map((card, index) => (
							<div
								key={card.id}
								className="grid grid-cols-[20px_1fr_1fr_20px_20px] items-center gap-4 rounded-lg text-(--color-gray-300)"
							>
								<p>{index + 1}</p>
								<p>{card.front}</p>
								<p>{card.back}</p>
								<Link href={`/deck/${id}/update/${card.id}`}>
									<Edit2 className="ease h-4 w-4 transition duration-300 hover:stroke-(--color-primary)" />
								</Link>
								<DeleteCard cardId={card.id} deckId={deck.id} />
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
}

function NoCards({ deck }: { deck: { id: string; title: string } }) {
	return (
		<div className="flex flex-col items-center gap-4">
			<p className="max-w-3xs text-center text-(--color-gray-300)">
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
				<button className="ease cursor-pointer rounded-2xl bg-(--color-primary) px-5 py-2 text-(--color-black) transition duration-300 hover:opacity-75">
					Add cards
				</button>
			</Link>
		</div>
	);
}
