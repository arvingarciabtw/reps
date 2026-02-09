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
				<button
					aria-label="Update deck button"
					className="ease cursor-pointer rounded-full p-1.5 transition duration-300 hover:bg-(--color-gray-100) dark:hover:bg-(--color-gray-700)"
				>
					<Edit2 className="h-4 w-4" />
				</button>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className="fixed inset-0 bg-(--color-black) opacity-75" />
				<Dialog.Content className="fixed top-[50%] left-[50%] flex w-full max-w-80 translate-x-[-50%] translate-y-[-50%] flex-col rounded-2xl border border-(--color-gray-700) bg-(--color-white) p-6 text-(--color-gray-300) outline-none dark:bg-(--color-gray-800)">
					<Dialog.Title className="mb-2 text-2xl font-medium text-(--color-gray-800) dark:text-(--color-white)">
						Edit Deck
					</Dialog.Title>
					<form action={formAction} className="mt-2 flex flex-col">
						<input type="hidden" name="deckId" value={deckId} />
						<fieldset className="flex w-full items-center gap-3">
							<label htmlFor="name" className="sr-only">
								Name
							</label>
							<input
								required
								id="title"
								name="title"
								defaultValue={deckName}
								className="w-full rounded-md bg-gray-100 px-3 py-2 text-(--color-gray-800) placeholder-(--color-gray-300) opacity-75 focus:ring-1 focus:ring-(--color-gray-800) focus:outline-none dark:bg-(--color-black) dark:text-(--color-gray-300) dark:placeholder-(--color-gray-600) dark:focus:ring-(--color-primary)"
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
		<div className="mt-6 flex gap-4 self-end">
			<Dialog.Close asChild className="self-end">
				<button
					aria-label="Close"
					disabled={pending}
					className="ease flex cursor-pointer items-center gap-2 rounded-2xl border border-(--color-gray-200) bg-transparent px-5 py-2 text-(--color-gray-600) transition duration-300 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-(--color-gray-700) dark:bg-(--color-gray-700) dark:text-(--color-gray-300) hover:dark:bg-(--color-gray-700) dark:hover:opacity-75"
				>
					Cancel
				</button>
			</Dialog.Close>
			<button
				type="submit"
				disabled={pending}
				className="ease flex cursor-pointer items-center gap-2 rounded-2xl border border-(--color-gray-200) bg-transparent px-5 py-2 text-(--color-gray-600) transition duration-300 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-(--color-gray-700) dark:bg-(--color-gray-700) dark:text-(--color-gray-300) hover:dark:bg-(--color-gray-700) dark:hover:opacity-75"
			>
				Edit deck
			</button>
		</div>
	);
}
