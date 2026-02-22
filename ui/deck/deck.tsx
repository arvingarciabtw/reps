"use client";

import UpdateDeck from "@/ui/deck/update-deck";
import DeleteDeck from "@/ui/deck/delete-deck";
import { Layers } from "react-feather";
import {
	DeckWrapper,
  Card,
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
      <Card className="x1"></Card>
      <Card className="x2"></Card>
      <Card className="x3"></Card>
      <Card className="x4"></Card>
      <Card className="x5">
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <ReviewDeck deckId={deckId} deckName={deckName} />
          <ActionsWrapper>
            <ViewDeck deckId={deckId} />
            <UpdateDeck deckId={deckId} deckName={deckName} />
            <DeleteDeck deckId={deckId} />
          </ActionsWrapper>
        </div>
      </Card>
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
