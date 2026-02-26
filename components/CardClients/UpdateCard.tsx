"use client";

import CardInputs from "@/components/CardPlayground";
import CardErrors from "@/components/CardErrors";
import { updateCard } from "@/actions/card-actions";
import { useState, useActionState } from "react";
import { useFormStatus } from "react-dom";
import Link from "next/link";
import {
	PageWrapper,
	Description,
	PrimaryLink,
	Form,
	ButtonGroup,
	ActionButton,
} from "@/components/CardClients/UpdateCard.style";

export default function UpdateCard({
	deckId,
	deckTitle,
	card,
}: {
	deckId: string;
	deckTitle: string;
	card: {
		id: string;
		front: string;
		back: string;
		deckId: string;
	};
}) {
	const [state, formAction] = useActionState(updateCard, { message: null });
	const [frontValue, setFrontValue] = useState(card.front);
	const [backValue, setBackValue] = useState(card.back);

	return (
		<PageWrapper>
			<Description>
				To edit cards in your <span>{deckTitle}</span> deck, you can use{" "}
				<PrimaryLink
					href="https://www.markdownguide.org/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Markdown
				</PrimaryLink>{" "}
				syntax. You can flip the output below to see what it looks like.
			</Description>
			<Form action={formAction}>
				<FormInputs
					deckId={deckId}
					cardId={card.id}
					front={frontValue}
					back={backValue}
				/>
				<SubmitButtons deckId={deckId} />
				<CardErrors state={state} />
				<CardInputs
					front={{
						value: frontValue,
						setter: setFrontValue,
					}}
					back={{
						value: backValue,
						setter: setBackValue,
					}}
				/>
			</Form>
		</PageWrapper>
	);
}

function FormInputs({
	deckId,
	cardId,
	front,
	back,
}: {
	deckId: string;
	cardId: string;
	front: string;
	back: string;
}) {
	return (
		<>
			<input type="hidden" name="deckId" value={deckId} />
			<input type="hidden" name="cardId" value={cardId} />
			<input type="hidden" name="front" value={front} />
			<input type="hidden" name="back" value={back} />
		</>
	);
}

function SubmitButtons({ deckId }: { deckId: string }) {
	const { pending } = useFormStatus();

	return (
		<ButtonGroup>
			<Link href={`/deck/${deckId}/view`}>
				<ActionButton disabled={pending}>View cards</ActionButton>
			</Link>
			<ActionButton type="submit" disabled={pending}>
				Update card
			</ActionButton>
		</ButtonGroup>
	);
}
