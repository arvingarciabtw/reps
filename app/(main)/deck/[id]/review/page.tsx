import { fetchCards } from "@/lib/queries";
import ReviewCardsSection from "@/app/ui/review-cards-section";

export default async function ReviewPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const cards = await fetchCards(id);

	return <ReviewCardsSection cards={cards} deckId={id} />;
}
