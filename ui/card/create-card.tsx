"use client";

import Link from "next/link";
import CardInputs from "@/ui/card/card-inputs";
import CardInputsErrors from "@/ui/card/card-inputs-errors";
import { FRONT, BACK } from "@/lib/constants/card-inputs";
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
} from "@/ui/card/card.style";

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
				<input type="hidden" name="deckId" value={deckId} />
				<SubmitButtons deckId={deckId} />
				<CardInputsErrors state={state} />
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
