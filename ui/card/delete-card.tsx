"use client";

import { AlertDialog } from "radix-ui";
import { Trash2 } from "react-feather";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { deleteCard } from "@/actions/card-actions";
import {
	IconButton,
	Overlay,
	ModalContent,
	ModalTitle,
	ModalDescription,
	ActionButton,
	DangerButton,
	Error,
} from "@/ui/card/card.style";

export default function DeleteCard({
	cardId,
	deckId,
}: {
	cardId: string;
	deckId: string;
}) {
	const [state, formAction] = useActionState(deleteCard, { message: null });

	return (
		<AlertDialog.Root>
			<AlertDialog.Trigger asChild>
				<IconButton aria-label="Delete card button">
					<Trash2 style={{ width: "1rem", height: "1rem" }} />
				</IconButton>
			</AlertDialog.Trigger>
			<AlertDialog.Portal>
				<Overlay />
				<ModalContent>
					<ModalTitle>Are you absolutely sure?</ModalTitle>
					<ModalDescription>
						This action cannot be undone. This will permanently delete your
						card.
					</ModalDescription>
					<form action={formAction} style={{ display: "flex", gap: "1rem" }}>
						<input type="hidden" name="cardId" value={cardId} />
						<input type="hidden" name="deckId" value={deckId} />

						{state.errors?.front && <Error>{state.errors.front[0]}</Error>}
						{state.errors?.back && <Error>{state.errors.back[0]}</Error>}
						{state.message && <Error>{state.message}</Error>}

						<SubmitButtons />
					</form>
				</ModalContent>
			</AlertDialog.Portal>
		</AlertDialog.Root>
	);
}

function SubmitButtons() {
	const { pending } = useFormStatus();

	return (
		<>
			<AlertDialog.Cancel asChild>
				<ActionButton type="button" disabled={pending}>
					Cancel
				</ActionButton>
			</AlertDialog.Cancel>
			<DangerButton type="submit" disabled={pending}>
				Delete card
			</DangerButton>
		</>
	);
}
