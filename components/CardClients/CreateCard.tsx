"use client";

import Link from "next/link";
import CardPlayground from "@/components/CardPlayground";
import CardErrors from "@/components/CardErrors";
import {
	FRONT,
	BACK,
} from "@/components/CardPlayground/CardPlayground.constants";
import { createCard } from "@/actions/card-actions";
import { useState, useActionState } from "react";
import { useFormStatus } from "react-dom";
import {
	PageWrapper,
	Description,
	PrimaryLink,
	Form,
	ButtonGroup,
	ActionButton,
} from "@/components/CardClients/CreateCard.style";

export default function CreateCard({
	deckId,
	deckTitle,
}: {
	deckId: string;
	deckTitle: string;
}) {
	const [state, formAction] = useActionState(createCard, { message: null });
	const [frontValue, setFrontValue] = useState(FRONT);
	const [backValue, setBackValue] = useState(BACK);

	return (
		<PageWrapper>
			<Description>
				To add cards to your <span>{deckTitle}</span> deck, you can use{" "}
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
				<FormInputs deckId={deckId} front={frontValue} back={backValue} />
				<SubmitButtons deckId={deckId} />
				<CardErrors state={state} />
				<CardPlayground
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
	front,
	back,
}: {
	deckId: string;
	front: string;
	back: string;
}) {
	return (
		<>
			<input type="hidden" name="deckId" value={deckId} />
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
				Create card
			</ActionButton>
		</ButtonGroup>
	);
}
