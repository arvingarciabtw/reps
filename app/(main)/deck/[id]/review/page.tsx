import { fetchCardsForReview } from "@/lib/queries";
import ReviewCards from "@/ui/card/review-cards";

export default async function ReviewPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const cards = await fetchCardsForReview(id);

	return <ReviewCards cards={cards} deckId={id} />;
}
