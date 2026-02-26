"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { updateDeck } from "@/actions/deck-actions";
import { Edit2 } from "react-feather";
import { Dialog } from "radix-ui";
import DeckErrors from "@/components/DeckErrors";
import Button from "@/components/Button";
import {
	StyledDialogOverlay,
	StyledDialogContent,
	StyledDialogTitle,
	Form,
	Fieldset,
	Input,
	SubmitButtonsWrapper,
	HiddenLabel,
} from "@/components/DeckClients/UpdateDeck.style";

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
				<Button variant="icon" aria-label="Update deck button">
					<Edit2 style={{ width: "1rem", height: "1rem" }} />
				</Button>
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
						<DeckErrors state={state} />
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
				<Button variant="regular" aria-label="Close" disabled={pending}>
					Cancel
				</Button>
			</Dialog.Close>
			<Button variant="regular" type="submit" disabled={pending}>
				Edit deck
			</Button>
		</SubmitButtonsWrapper>
	);
}
