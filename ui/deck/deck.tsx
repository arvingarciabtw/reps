"use client";

import Link from "next/link";
import UpdateDeck from "@/ui/deck/update-deck";
import DeleteDeck from "@/ui/deck/delete-deck";
import { Layers } from "react-feather";

export default function Deck({
	deckName,
	deckId,
}: {
	deckName: string;
	deckId: string;
}) {
	return (
		<article
			className="relative flex max-h-16 items-center justify-between gap-6 rounded-2xl border border-(--color-gray-200) p-4 pl-5 text-(--color-gray-800) dark:border-(--color-gray-700) dark:bg-(--color-gray-800) dark:text-(--color-gray-300)"
			key={deckName}
		>
			<ReviewDeck deckId={deckId} deckName={deckName} />
			<div className="flex gap-0 text-(--color-gray-800) dark:text-(--color-gray-300)">
				<ViewDeck deckId={deckId} />
				<UpdateDeck deckId={deckId} deckName={deckName} />
				<DeleteDeck deckId={deckId} />
			</div>
		</article>
	);
}

function ReviewDeck({
	deckId,
	deckName,
}: {
	deckId: string;
	deckName: string;
}) {
	return (
		<Link href={`/deck/${deckId}/review`} className="w-full cursor-pointer">
			<p>{deckName}</p>
		</Link>
	);
}

function ViewDeck({ deckId }: { deckId: string }) {
	return (
		<Link
			href={`/deck/${deckId}/view`}
			className="ease cursor-pointer rounded-full p-1.5 transition duration-300 hover:bg-(--color-gray-100) dark:hover:bg-(--color-gray-700)"
		>
			<Layers className="h-4.5 w-4.5" />
		</Link>
	);
}
