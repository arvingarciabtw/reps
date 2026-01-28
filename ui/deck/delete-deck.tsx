import { AlertDialog } from "radix-ui";
import { Trash2 } from "react-feather";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { deleteDeck } from "@/actions/deck-actions";

function DeleteButtons() {
	const { pending } = useFormStatus();

	return (
		<>
			<AlertDialog.Cancel asChild>
				<button
					className="ease cursor-pointer rounded-2xl bg-(--color-gray-700) px-5 py-2 transition duration-300 hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50"
					disabled={pending}
				>
					Cancel
				</button>
			</AlertDialog.Cancel>
			<button
				type="submit"
				disabled={pending}
				className="ease cursor-pointer rounded-2xl bg-red-500 px-5 py-2 text-(--color-white) transition duration-300 hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50"
			>
				Delete deck
			</button>
		</>
	);
}

export default function DeleteDeckModal({ deckId }: { deckId: string }) {
	const [state, formAction] = useActionState(deleteDeck, { message: null });

	return (
		<AlertDialog.Root>
			<AlertDialog.Trigger asChild>
				<button className="cursor-pointer hover:text-(--color-primary)">
					<Trash2 className="h-4 w-4" />
				</button>
			</AlertDialog.Trigger>
			<AlertDialog.Portal>
				<AlertDialog.Overlay className="fixed inset-0 bg-(--color-black) opacity-75" />
				<AlertDialog.Content className="fixed top-[50%] left-[50%] flex max-w-80 min-w-80 translate-x-[-50%] translate-y-[-50%] flex-col items-center rounded-2xl border border-(--color-gray-700) bg-(--color-gray-800) p-6 text-(--color-gray-300) outline-none">
					<AlertDialog.Title className="mb-2 text-2xl font-medium text-(--color-white)">
						Are you absolutely sure?
					</AlertDialog.Title>
					<AlertDialog.Description className="mb-4 text-center">
						This action cannot be undone. This will permanently delete your
						deck.
					</AlertDialog.Description>
					<form action={formAction} className="flex gap-4">
						<input type="hidden" name="deckId" value={deckId} />
						{state.errors?.title && (
							<p className="mt-1 text-sm text-red-500">
								{state.errors.title[0]}
							</p>
						)}
						{state.message && (
							<p className="mt-1 text-sm text-red-500">{state.message}</p>
						)}
						<DeleteButtons />
					</form>
				</AlertDialog.Content>
			</AlertDialog.Portal>
		</AlertDialog.Root>
	);
}
