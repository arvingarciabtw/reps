"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { createDeck } from "@/actions/deck-actions";
import { Plus } from "react-feather";
import { Dialog } from "radix-ui";
import DeckErrors from "@/components/DeckErrors";
import {
	HiddenLabel,
	StyledDialogOverlay,
	StyledDialogContent,
	StyledDialogTitle,
	Form,
	Fieldset,
	Input,
	SubmitButtonsWrapper,
	CancelButton,
	SubmitButton,
	CreateButton,
} from "@/components/DeckClients/CreateDeck.style";

export default function CreateDeck() {
	const [state, formAction] = useActionState(createDeck, { message: null });

	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<CreateButton aria-label="Create deck button">
					<Plus style={{ stroke: "var(--color-black)" }} />
				</CreateButton>
			</Dialog.Trigger>
			<Dialog.Portal>
				<StyledDialogOverlay />
				<StyledDialogContent>
					<StyledDialogTitle>Add Deck</StyledDialogTitle>
					<Form action={formAction}>
						<Fieldset>
							<HiddenLabel htmlFor="name">Name</HiddenLabel>
							<Input
								required
								id="title"
								name="title"
								placeholder="TypeScript"
							/>
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
				<CancelButton aria-label="Close" disabled={pending}>
					Cancel
				</CancelButton>
			</Dialog.Close>
			<SubmitButton type="submit" disabled={pending}>
				Create deck
			</SubmitButton>
		</SubmitButtonsWrapper>
	);
}
