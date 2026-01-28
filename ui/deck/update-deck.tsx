"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { updateDeck } from "@/actions/deck-actions";
import { Edit2 } from "react-feather";
import { Dialog } from "radix-ui";

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
				<button className="cursor-pointer hover:text-(--color-primary)">
					<Edit2 className="h-4 w-4" />
				</button>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className="fixed inset-0 bg-(--color-black) opacity-75" />
				<Dialog.Content className="fixed top-[50%] left-[50%] flex max-w-75 min-w-70 translate-x-[-50%] translate-y-[-50%] flex-col rounded-2xl border border-(--color-gray-700) bg-(--color-gray-800) p-6 text-(--color-gray-300) outline-none">
					<Dialog.Title className="mb-2 text-2xl font-medium text-(--color-white)">
						Edit Deck
					</Dialog.Title>
					<form action={formAction} className="mt-2 flex flex-col">
						<input type="hidden" name="deckId" value={deckId} />
						<fieldset className="flex w-full items-center gap-3">
							<label htmlFor="name" className="sr-only text-(--color-gray-300)">
								Name
							</label>
							<input
								required
								id="title"
								name="title"
								defaultValue={deckName}
								className="w-full rounded-md bg-(--color-black) px-3 py-2 placeholder-(--color-gray-600) opacity-75 focus:ring-1 focus:ring-(--color-primary) focus:outline-none"
							/>
						</fieldset>
						{state.errors?.title && (
							<p className="mt-1 text-sm text-red-500">
								{state.errors.title[0]}
							</p>
						)}
						{state.message && (
							<p className="mt-1 text-sm text-red-500">{state.message}</p>
						)}
						<SubmitButtons />
					</form>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}

function SubmitButtons() {
	const { pending } = useFormStatus();

	return (
		<div className="flex gap-4 self-end">
			<Dialog.Close asChild className="self-end">
				<button
					aria-label="Close"
					disabled={pending}
					className="ease cursor-pointer rounded-2xl bg-(--color-gray-700) px-5 py-2 transition duration-300 hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50"
				>
					Cancel
				</button>
			</Dialog.Close>
			<button
				type="submit"
				disabled={pending}
				className="ease mt-6 cursor-pointer self-end rounded-2xl bg-(--color-primary) px-5 py-2 text-(--color-black) transition duration-300 hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50"
			>
				Edit deck
			</button>
		</div>
	);
}
