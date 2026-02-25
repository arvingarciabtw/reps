import { fetchCardsForReview } from "@/lib/queries";
import ReviewCards from "@/components/CardClients/ReviewCards";

export default async function ReviewPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const cards = await fetchCardsForReview(id);

	return <ReviewCards cards={cards} deckId={id} />;
}
