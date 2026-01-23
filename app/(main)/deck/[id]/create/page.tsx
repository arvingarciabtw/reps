import { fetchDeck } from "@/lib/queries";
import CreateCardForm from "@/app/ui/create-card-form";

export default async function CreateCardPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const deck = await fetchDeck(id);

	if (!deck) return <p>Deck not fetched.</p>;

	return <CreateCardForm deckId={id} deckTitle={deck.title} />;
}
