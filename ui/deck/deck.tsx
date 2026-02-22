"use client";

import UpdateDeck from "@/ui/deck/update-deck";
import DeleteDeck from "@/ui/deck/delete-deck";
import { Layers } from "react-feather";
import {
	DeckWrapper,
	ActionsWrapper,
	ReviewDeckWrapper,
	ViewDeckWrapper,
} from "@/ui/deck/deck.style";

export default function Deck({
	deckName,
	deckId,
}: {
	deckName: string;
	deckId: string;
}) {
	return (
		<DeckWrapper key={deckName}>
			<ReviewDeck deckId={deckId} deckName={deckName} />
			<ActionsWrapper>
				<ViewDeck deckId={deckId} />
				<UpdateDeck deckId={deckId} deckName={deckName} />
				<DeleteDeck deckId={deckId} />
			</ActionsWrapper>
		</DeckWrapper>
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
		<ReviewDeckWrapper href={`/deck/${deckId}/review`}>
			<p>{deckName}</p>
		</ReviewDeckWrapper>
	);
}

function ViewDeck({ deckId }: { deckId: string }) {
	return (
		<ViewDeckWrapper href={`/deck/${deckId}/view`}>
			<Layers style={{ width: "2.125rem", height: "1.125rem" }} />
		</ViewDeckWrapper>
	);
}
