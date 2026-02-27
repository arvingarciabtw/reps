"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { createDeck } from "@/actions/deck-actions";
import { Plus } from "react-feather";
import { Dialog } from "radix-ui";
import DeckErrors from "@/components/DeckErrors";
import Button from "@/components/Button";
import {
	HiddenLabel,
	StyledDialogOverlay,
	StyledDialogContent,
	StyledDialogTitle,
	Form,
	Fieldset,
	Input,
	SubmitButtonsWrapper,
} from "@/components/DeckClients/CreateDeck.style";

export default function CreateDeck() {
	const [state, formAction] = useActionState(createDeck, { message: null });

	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<Button
					variant="cta"
					aria-label="Create deck button"
					style={{
						padding: "0.5rem",
						position: "absolute",
						right: "0",
						bottom: "-3.75rem",
						marginRight: "1.5rem",
						marginBottom: "1.5rem",
						borderRadius: "50%",
					}}
				>
					<Plus style={{ stroke: "var(--color-gray-900)" }} />
				</Button>
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
				<Button variant="regular" aria-label="Close" disabled={pending}>
					Cancel
				</Button>
			</Dialog.Close>
			<Button variant="regular" type="submit" disabled={pending}>
				Create deck
			</Button>
		</SubmitButtonsWrapper>
	);
}
