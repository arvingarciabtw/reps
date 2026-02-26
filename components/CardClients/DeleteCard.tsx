"use client";

import { AlertDialog } from "radix-ui";
import { Trash2 } from "react-feather";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { deleteCard } from "@/actions/card-actions";
import CardErrors from "@/components/CardErrors";
import Button from "@/components/Button";
import {
	Overlay,
	ModalContent,
	ModalTitle,
	ModalDescription,
} from "@/components/CardClients/DeleteCard.style";

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
				<Button variant="icon" aria-label="Delete card button">
					<Trash2 style={{ width: "1rem", height: "1rem" }} />
				</Button>
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
						<CardErrors state={state} />
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
				<Button variant="regular" type="button" disabled={pending}>
					Cancel
				</Button>
			</AlertDialog.Cancel>
			<Button variant="danger" type="submit" disabled={pending}>
				Delete card
			</Button>
		</>
	);
}
