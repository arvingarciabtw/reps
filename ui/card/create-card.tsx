"use client";

import Link from "next/link";
import CardInputs from "@/ui/card/card-inputs";
import { createCard } from "@/actions/card-actions";
import { useState, useActionState } from "react";
import { useFormStatus } from "react-dom";

export default function CreateCard({
	deckId,
	deckTitle,
}: {
	deckId: string;
	deckTitle: string;
}) {
	const [state, formAction] = useActionState(createCard, { message: null });
	const [frontValue, setFrontValue] = useState(`\`\`\`javascript
console.log(typeof + "21");
\`\`\``);
	const [backValue, setBackValue] = useState("number");

	return (
		<div className="mx-auto my-auto flex w-full flex-col text-center text-(--color-gray-600) dark:text-(--color-gray-300)">
			<p className="max-w-120 self-center">
				To add cards to your{" "}
				<Link
					href={`/deck/${deckId}`}
					className="text-(--color-primary) underline hover:no-underline"
				>
					{deckTitle}
				</Link>{" "}
				deck, you can use{" "}
				<Link
					href="https://www.markdownguide.org/"
					target="_blank"
					rel="noopener noreferrer"
					className="text-(--color-primary) underline hover:no-underline"
				>
					Markdown
				</Link>{" "}
				syntax. You can flip the output below to see what it looks like.
			</p>
			<form className="flex flex-col" action={formAction}>
				<input type="hidden" name="deckId" value={deckId} />
				<SubmitButtons deckId={deckId} />
				{state.errors?.front && (
					<p className="mt-1 text-sm text-red-500">{state.errors.front[0]}</p>
				)}
				{state.errors?.back && (
					<p className="mt-1 text-sm text-red-500">{state.errors.back[0]}</p>
				)}
				{state.message && (
					<p className="mt-1 text-sm text-red-500">{state.message}</p>
				)}
				<CardInputs
					front={{
						value: frontValue,
						setter: setFrontValue,
					}}
					back={{
						value: backValue,
						setter: setBackValue,
					}}
				/>
			</form>
		</div>
	);
}

function SubmitButtons({ deckId }: { deckId: string }) {
	const { pending } = useFormStatus();

	return (
		<div className="mt-4 mb-6 flex items-center gap-4 self-center text-(--color-white) dark:text-(--color-gray-300)">
			<Link href={`/deck/${deckId}/view`}>
				<button
					className="ease flex cursor-pointer items-center gap-2 rounded-2xl border border-(--color-gray-200) bg-transparent px-5 py-2 text-(--color-gray-600) transition duration-300 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-(--color-gray-700) dark:bg-(--color-gray-800) dark:text-(--color-gray-300) dark:hover:bg-(--color-gray-800) dark:hover:text-(--color-primary)"
					disabled={pending}
				>
					View cards
				</button>
			</Link>
			<button
				type="submit"
				disabled={pending}
				className="ease flex cursor-pointer items-center gap-2 rounded-2xl border border-(--color-gray-200) bg-transparent px-5 py-2 text-(--color-gray-600) transition duration-300 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-(--color-gray-700) dark:bg-(--color-gray-800) dark:text-(--color-gray-300) dark:hover:bg-(--color-gray-800) dark:hover:text-(--color-primary)"
			>
				Create card
			</button>
		</div>
	);
}
