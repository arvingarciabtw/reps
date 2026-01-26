"use client";

import Link from "next/link";
import UpdateDeck from "@/ui/deck/update-deck";
import DeleteDeck from "@/ui/deck/delete-deck";

export default function Deck({
	deckName,
	deckId,
}: {
	deckName: string;
	deckId: string;
}) {
	return (
		<article
			className="ease relative flex items-center justify-between gap-6 rounded-2xl border border-(--color-gray-700) bg-(--color-gray-800) p-4 pl-5 text-(--color-fg) transition duration-300"
			key={deckName}
		>
			<Link href={`/deck/${deckId}`} className="cursor-pointer">
				<p>{deckName}</p>
			</Link>
			<div className="flex gap-2 text-(--color-gray-300)">
				<UpdateDeck deckId={deckId} deckName={deckName} />
				<DeleteDeck deckId={deckId} />
			</div>
		</article>
	);
}
