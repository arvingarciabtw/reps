"use client";

import type { CardType } from "@/components/Card/Card.types";
import Card from "@/components/Card";
import Link from "next/link";
import { Check, X, Edit2 } from "react-feather";
import { useState } from "react";
import { markCardCorrect, markCardWrong } from "@/actions/card-actions";
import {
	EmptyStateContainer,
	DashboardButton,
	MainWrapper,
	ControlsWrapper,
	CardCount,
	ActionGroup,
	EditButton,
	CorrectButton,
	WrongButton,
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
				<Link href="/dashboard">
					<DashboardButton>Back to dashboard</DashboardButton>
				</Link>
			</EmptyStateContainer>
		);
	}

	return (
		<MainWrapper>
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
					<EditButton aria-label="Update card button" disabled={isProcessing}>
						<StyledLink
							aria-label="Redirect to update card page"
							href={`/deck/${deckId}/update/${remainingCards[cardIndex].id}`}
						>
							<Edit2 style={{ width: "0.9375rem", height: "0.9375rem" }} />
						</StyledLink>
					</EditButton>
					<CorrectButton
						aria-label="Mark card as correct button"
						onClick={handleCorrect}
						disabled={isProcessing}
					>
						<Check style={{ width: "1.125rem", height: "1.125rem" }} />
					</CorrectButton>
					<WrongButton
						aria-label="Mark card as wrong button"
						onClick={handleWrong}
						disabled={isProcessing}
					>
						<X style={{ width: "1.125rem", height: "1.125rem" }} />
					</WrongButton>
				</ActionGroup>
			</ControlsWrapper>
		</MainWrapper>
	);
}
