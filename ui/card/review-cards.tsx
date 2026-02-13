"use client";

import Card from "@/ui/card/card";
import { Check, X, Edit2 } from "react-feather";
import type { CardType } from "@/lib/definitions";
import Link from "next/link";
import { useState } from "react";
import { markCardCorrect, markCardWrong } from "@/actions/card-actions";

export default function ReviewCardsSection({
	cards,
	deckId,
}: {
	cards: CardType[];
	deckId: string;
}) {
	const [remainingCards, setRemainingCards] = useState(cards);
	const [cardIndex] = useState(0);
	const [isProcessing, setIsProcessing] = useState(false);

	async function handleCorrect() {
		if (isProcessing) return;
		setIsProcessing(true);

		try {
			const currentCard = remainingCards[cardIndex];
			await markCardCorrect(currentCard.id, deckId);

			const newCards = remainingCards.filter((_, index) => index !== cardIndex);
			setRemainingCards(newCards);
		} catch (error) {
			console.error("Error marking card correct:", error);
		} finally {
			setIsProcessing(false);
		}
	}

	async function handleWrong() {
		if (isProcessing) return;
		setIsProcessing(true);

		try {
			const currentCard = remainingCards[cardIndex];
			await markCardWrong(currentCard.id, deckId);

			const newCards = [...remainingCards];
			const [removedCard] = newCards.splice(cardIndex, 1);
			newCards.push(removedCard);
			setRemainingCards(newCards);
		} catch (error) {
			console.error("Error marking card wrong:", error);
		} finally {
			setIsProcessing(false);
		}
	}

	if (remainingCards.length === 0) {
		return (
			<div className="my-auto flex flex-col items-center gap-4 self-center text-(--color-gray-600) dark:text-(--color-gray-300)">
				<p>No more cards to be reviewed.</p>
				<Link href={`/deck/${deckId}`}>
					<button className="ease flex cursor-pointer items-center gap-2 rounded-2xl border border-(--color-gray-200) bg-transparent px-5 py-2 text-(--color-gray-600) transition duration-300 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-(--color-gray-700) dark:bg-(--color-gray-800) dark:text-(--color-gray-300) dark:hover:bg-(--color-gray-800) dark:hover:text-(--color-primary)">
						Back to deck
					</button>
				</Link>
			</div>
		);
	}

	return (
		<div className="my-auto flex h-50 w-full flex-col items-center gap-4 self-center sm:w-104">
			<Card
				key={remainingCards[cardIndex].id}
				front={remainingCards[cardIndex].front}
				back={remainingCards[cardIndex].back}
			/>
			<div className="flex w-full max-w-104 flex-wrap items-center justify-between gap-2">
				<p className="mr-auto text-(--color-gray-600) dark:text-(--color-gray-300)">
					Cards left: <span className="font-sans">{remainingCards.length}</span>
				</p>
				<div className="flex gap-4">
					<button
						className="ease grid h-6.5 w-6.5 cursor-pointer place-items-center gap-2 rounded-2xl bg-(--color-primary) p-1 text-(--color-black) transition duration-300 hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50"
						disabled={isProcessing}
					>
						<Link
							href={`/deck/${deckId}/update/${remainingCards[cardIndex].id}`}
						>
							<Edit2 className="h-3.75 w-3.75" />
						</Link>
					</button>
					<button
						onClick={handleCorrect}
						disabled={isProcessing}
						className="ease flex cursor-pointer items-center gap-2 rounded-2xl bg-green-400 p-1 text-(--color-black) transition duration-300 hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50"
					>
						<Check className="h-4.5 w-4.5" />
					</button>
					<button
						onClick={handleWrong}
						disabled={isProcessing}
						className="ease flex cursor-pointer items-center gap-2 rounded-2xl bg-red-400 p-1 text-(--color-black) transition duration-300 hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50"
					>
						<X className="h-4.5 w-4.5" />
					</button>
				</div>
			</div>
		</div>
	);
}
