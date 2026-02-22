"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { createDeck } from "@/actions/deck-actions";
import { Plus } from "react-feather";
import { Dialog } from "radix-ui";
import {
	HiddenLabel,
	StyledDialogOverlay,
	StyledDialogContent,
	StyledDialogTitle,
	Form,
	Fieldset,
	Input,
	Error,
	SubmitButtonsWrapper,
	CancelButton,
	SubmitButton,
	CreateButton,
} from "@/ui/deck/deck.style";

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
				Create deck
			</SubmitButton>
		</SubmitButtonsWrapper>
	);
}
