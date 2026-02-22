"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { updateDeck } from "@/actions/deck-actions";
import { Edit2 } from "react-feather";
import { Dialog } from "radix-ui";
import {
	CancelButton,
	UpdateButton,
	StyledDialogOverlay,
	StyledDialogContent,
	StyledDialogTitle,
	Form,
	Fieldset,
	Input,
	Error,
	SubmitButtonsWrapper,
	SubmitButton,
	HiddenLabel,
} from "@/ui/deck/deck.style";

export default function UpdateDeck({
	deckId,
	deckName,
}: {
	deckId: string;
	deckName: string;
}) {
	const [state, formAction] = useActionState(updateDeck, { message: null });

	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<UpdateButton aria-label="Update deck button">
					<Edit2 style={{ width: "1rem", height: "1rem" }} />
				</UpdateButton>
			</Dialog.Trigger>
			<Dialog.Portal>
				<StyledDialogOverlay />
				<StyledDialogContent>
					<StyledDialogTitle>Edit Deck</StyledDialogTitle>
					<Form action={formAction}>
						<input type="hidden" name="deckId" value={deckId} />
						<Fieldset>
							<HiddenLabel htmlFor="name">Name</HiddenLabel>
							<Input required id="title" name="title" defaultValue={deckName} />
						</Fieldset>
						{state.errors?.title && <Error>{state.errors.title[0]}</Error>}
						{state.message && <Error>{state.message}</Error>}
						<SubmitButtons />
					</Form>
				</StyledDialogContent>
			</Dialog.Portal>
		</Dialog.Root>
	);
}

function SubmitButtons() {
	const { pending } = useFormStatus();

	return (
		<SubmitButtonsWrapper>
			<Dialog.Close asChild style={{ alignSelf: "end" }}>
				<CancelButton aria-label="Close" disabled={pending}>
					Cancel
				</CancelButton>
			</Dialog.Close>
			<SubmitButton type="submit" disabled={pending}>
				Edit deck
			</SubmitButton>
		</SubmitButtonsWrapper>
	);
}
