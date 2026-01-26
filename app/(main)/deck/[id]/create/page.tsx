import { fetchDeck } from "@/lib/queries";
import CreateCard from "@/ui/card/create-card";

export default async function CreateCardPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const deck = await fetchDeck(id);

	if (!deck) return <p>Deck not fetched.</p>;

	return <CreateCard deckId={id} deckTitle={deck.title} />;
}
