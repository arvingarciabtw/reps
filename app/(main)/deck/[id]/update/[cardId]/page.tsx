import { fetchDeck, fetchCard } from "@/lib/queries";
import UpdateCardForm from "@/app/ui/update-card-form";

export default async function CreateCardPage({
	params,
}: {
	params: Promise<{ id: string; cardId: string }>;
}) {
	const { id, cardId } = await params;
	const deck = await fetchDeck(id);

	if (!deck) return <p>Deck not fetched.</p>;

	const card = await fetchCard(cardId);

	if (!card) return <p>Card not fetched.</p>;

	return <UpdateCardForm deckId={id} deckTitle={deck.title} card={card} />;
}
