import Link from "next/link";
import { fetchDeck } from "@/lib/queries";

export default async function DeckPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const deck = await fetchDeck(id);

	if (!deck) return <p>Deck not fetched.</p>;

	return (
		<div className="flex flex-1 flex-col items-center justify-center gap-4 text-(--color-gray-300)">
			<p className="max-w-90 text-center">
				You&apos;re currently at the{" "}
				<span className="text-(--color-primary)">{deck.title}</span> deck. You
				may view your cards or practice cards to be reviewed.
			</p>
			<div className="flex flex-wrap justify-center gap-4">
				<Link href={`/deck/${id}/view`}>
					<button className="ease cursor-pointer rounded-2xl border border-(--color-gray-700) bg-(--color-gray-800) px-5 py-2 transition duration-300 hover:opacity-75">
						View cards
					</button>
				</Link>
				<Link href={`/deck/${id}/review`}>
					<button className="ease cursor-pointer rounded-2xl border border-(--color-gray-700) bg-(--color-gray-800) px-5 py-2 transition duration-300 hover:opacity-75">
						Review
					</button>
				</Link>
			</div>
		</div>
	);
}
