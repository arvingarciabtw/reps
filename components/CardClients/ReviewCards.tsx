"use client";

import type { CardType } from "@/components/Card/Card.types";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Maximize from "@/components/Maximize";
import { Check, X, Edit2 } from "react-feather";
import { useState } from "react";
import { markCardCorrect, markCardWrong } from "@/actions/card-actions";
import {
	EmptyStateContainer,
	MainWrapper,
	ControlsWrapper,
	CardCount,
	ActionGroup,
	StyledLink,
} from "@/components/CardClients/ReviewCards.style";

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
			<EmptyStateContainer>
				<p>No more cards to be reviewed.</p>
				<Button variant="regular" as="a" href="/dashboard">
					Back to dashboard
				</Button>
			</EmptyStateContainer>
		);
	}

	return (
		<MainWrapper>
			<Maximize
				front={remainingCards[cardIndex].front}
				back={remainingCards[cardIndex].back}
				style={{ alignSelf: "flex-end" }}
			/>
			<Card
				key={remainingCards[cardIndex].id}
				front={remainingCards[cardIndex].front}
				back={remainingCards[cardIndex].back}
			/>
			<ControlsWrapper>
				<CardCount>
					Cards left: <span>{remainingCards.length}</span>
				</CardCount>
				<ActionGroup>
					<Button
						variant="icon"
						aria-label="Update card button"
						disabled={isProcessing}
						style={{
							padding: "0.25rem",
							backgroundColor: "var(--color-primary)",
							width: "1.625rem",
						}}
					>
						<StyledLink
							aria-label="Redirect to update card page"
							href={`/deck/${deckId}/update/${remainingCards[cardIndex].id}`}
						>
							<Edit2 style={{ width: "0.975rem", height: "0.975rem" }} />
						</StyledLink>
					</Button>
					<Button
						variant="icon"
						aria-label="Mark card as correct button"
						onClick={handleCorrect}
						disabled={isProcessing}
						style={{
							padding: "0.25rem",
							backgroundColor: "var(--color-good)",
						}}
					>
						<Check
							style={{
								width: "1.125rem",
								height: "1.125rem",
								color: "var(--color-gray-900)",
							}}
						/>
					</Button>
					<Button
						variant="icon"
						aria-label="Mark card as wrong button"
						onClick={handleWrong}
						disabled={isProcessing}
						style={{
							padding: "0.25rem",
							backgroundColor: "var(--color-danger)",
						}}
					>
						<X
							style={{
								width: "1.125rem",
								height: "1.125rem",
								color: "var(--color-gray-900)",
							}}
						/>
					</Button>
				</ActionGroup>
			</ControlsWrapper>
		</MainWrapper>
	);
}
