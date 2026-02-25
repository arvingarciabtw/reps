import { AlertDialog } from "radix-ui";
import { Trash2 } from "react-feather";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { deleteDeck } from "@/actions/deck-actions";
import DeckErrors from "@/components/DeckErrors";
import {
	CancelButton,
	DeleteButton,
	DeleteDeckButton,
	StyledAlertDialogOverlay,
	StyledAlertDialogContent,
	StyledAlertDialogTitle,
	StyledAlertDialogDescription,
	DeleteForm,
} from "@/components/DeckClients/DeleteDeck.style";

function DeleteButtons() {
	const { pending } = useFormStatus();

	return (
		<>
			<AlertDialog.Cancel asChild>
				<CancelButton disabled={pending}>Cancel</CancelButton>
			</AlertDialog.Cancel>
			<DeleteButton type="submit" disabled={pending}>
				Delete deck
			</DeleteButton>
		</>
	);
}

export default function DeleteDeckModal({ deckId }: { deckId: string }) {
	const [state, formAction] = useActionState(deleteDeck, { message: null });

	return (
		<AlertDialog.Root>
			<AlertDialog.Trigger asChild>
				<DeleteDeckButton aria-label="Delete deck button">
					<Trash2 style={{ width: "1rem", height: "1rem" }} />
				</DeleteDeckButton>
			</AlertDialog.Trigger>
			<AlertDialog.Portal>
				<StyledAlertDialogOverlay />
				<StyledAlertDialogContent>
					<StyledAlertDialogTitle>
						Are you absolutely sure?
					</StyledAlertDialogTitle>
					<StyledAlertDialogDescription>
						This action cannot be undone. This will permanently delete your
						deck.
					</StyledAlertDialogDescription>
					<DeleteForm action={formAction}>
						<input type="hidden" name="deckId" value={deckId} />
						<DeckErrors state={state} />
						<DeleteButtons />
					</DeleteForm>
				</StyledAlertDialogContent>
			</AlertDialog.Portal>
		</AlertDialog.Root>
	);
}
