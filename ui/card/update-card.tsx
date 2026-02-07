"use client";

import Link from "next/link";
import Card from "@/ui/card/card";
import { updateCard } from "@/actions/card-actions";
import { useState, useActionState } from "react";
import { useFormStatus } from "react-dom";

export default function UpdateCard({
	deckId,
	deckTitle,
	card,
}: {
	deckId: string;
	deckTitle: string;
	card: {
		id: string;
		front: string;
		back: string;
		deckId: string;
	};
}) {
	const [state, formAction] = useActionState(updateCard, { message: null });
	const [frontValue, setFrontValue] = useState(card.front);
	const [backValue, setBackValue] = useState(card.back);

	return (
		<div className="mx-auto my-auto flex w-full flex-col text-center text-(--color-gray-600) dark:text-(--color-gray-300)">
			<p className="max-w-120 self-center">
				To edit cards in your{" "}
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
				<input type="hidden" name="cardId" value={card.id} />
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

				<div className="flex flex-col gap-4 sm:flex-row">
					<div className="flex flex-col gap-4 sm:flex-1">
						<Input
							heading={"Front"}
							type={"front"}
							value={frontValue}
							onChange={setFrontValue}
						/>
						<Input
							heading={"Back"}
							type={"back"}
							value={backValue}
							onChange={setBackValue}
						/>
					</div>
					<section className="flex w-full flex-1 flex-col gap-2 self-stretch">
						<h1 className="self-start text-(--color-gray-600) dark:text-(--color-white)">
							Output
						</h1>
						<Card front={frontValue} back={backValue} />
					</section>
				</div>
			</form>
		</div>
	);
}

function Input({
	heading,
	type,
	value,
	onChange,
}: {
	heading: string;
	type: string;
	value: string;
	onChange: (value: string) => void;
}) {
	function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
		onChange(e.target.value);
	}

	return (
		<section className="flex flex-col gap-2 sm:flex-1">
			<h1 className="self-start text-(--color-gray-600) dark:text-(--color-white)">
				{heading}
			</h1>
			<textarea
				required
				name={type}
				id={type}
				draggable="false"
				className="min-h-50 w-full resize-none overflow-y-auto rounded-lg bg-(--color-gray-light) p-4 font-mono text-sm text-(--color-gray-800) sm:min-h-25 dark:bg-(--color-gray-800) dark:text-(--color-gray-300)"
				value={value}
				onChange={handleChange}
			></textarea>
		</section>
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
				Update card
			</button>
		</div>
	);
}
