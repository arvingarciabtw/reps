"use client";

import Link from "next/link";
import EditDeckModal from "@/app/ui/edit-deck-modal";
import DeleteDeckModal from "@/app/ui/delete-deck-modal";

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
			<Link
				href="/dashboard/a-dynamically-generated-deck"
				className="cursor-pointer"
			>
				<p>{deckName}</p>
			</Link>
			<div className="flex gap-2 text-(--color-gray-300)">
				<EditDeckModal deckId={deckId} deckName={deckName} />
				<DeleteDeckModal deckId={deckId} />
			</div>
		</article>
	);
}
