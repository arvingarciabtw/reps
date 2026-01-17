import type { Deck } from "@/lib/definitions";

import Link from "next/link";
import { Plus, X } from "react-feather";
import { Dialog } from "radix-ui";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import prisma from "@/lib/prisma";

export default async function Home() {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session) redirect("/sign-in");

	return (
		<>
			<Dashboard />
		</>
	);
}

function Dashboard() {
	return (
		<main className="relative mx-auto w-full max-w-4xl flex-1 p-6">
			<Decks />
			<AddDeck />
		</main>
	);
}

async function Decks() {
	const decks = await prisma.deck.findMany();

	return (
		<>
			<h1 className="text-4xl font-medium">Decks</h1>
			<p className="mt-4 mb-10 max-w-lg text-(--color-gray-300)">
				All of your decks are below. Click on a deck to interact with its
				contents. Click on the add button on the bottom right to create a deck.
			</p>
			<section className="grid grid-cols-1 gap-4 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
				{decks.map((deck: Deck) => (
					<Deck key={deck.title} deckName={deck.title} />
				))}
			</section>
		</>
	);
}

function Deck({ deckName }: { deckName: string }) {
	return (
		<Link href="/dashboard/a-dynamically-generated-deck">
			<article
				className="ease grid cursor-pointer place-items-center rounded-2xl border border-(--color-gray-700) bg-(--color-gray-800) p-4 text-(--color-fg) transition duration-300 hover:text-(--color-primary)"
				key={deckName}
			>
				<p>{deckName}</p>
			</article>
		</Link>
	);
}

function AddDeck() {
	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<button className="ease absolute right-0 bottom-[-60] mr-6 mb-6 cursor-pointer rounded-[50%] border border-(--color-gray-700) bg-(--color-gray-800) p-3 ring-(--color-primary) transition duration-300 hover:opacity-75 focus:ring-1 focus:outline-none">
					<Plus className="stroke-(--color-primary)" />
				</button>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className="fixed inset-0 bg-(--color-black) opacity-75" />
				<Dialog.Content className="fixed top-[50%] left-[50%] flex max-w-75 min-w-70 translate-x-[-50%] translate-y-[-50%] flex-col rounded-2xl border border-(--color-gray-700) bg-(--color-gray-800) p-6 text-(--color-gray-300) outline-none">
					<Dialog.Title className="mb-2 text-2xl font-medium text-(--color-white)">
						Add Deck
					</Dialog.Title>
					<Dialog.Description className="mb-4 max-w-60">
						Simply enter the name of your deck below. That&apos;s it!
					</Dialog.Description>
					<fieldset className="flex w-full items-center gap-3">
						<label htmlFor="name" className="sr-only text-(--color-gray-300)">
							Name
						</label>
						<input
							required
							id="name"
							placeholder="TypeScript"
							className="w-full rounded-md bg-(--color-black) px-3 py-2 placeholder-(--color-gray-600) opacity-75 focus:ring-1 focus:ring-(--color-primary) focus:outline-none"
						/>
					</fieldset>
					<div className="mt-6 self-end">
						<Dialog.Close asChild>
							<button className="ease cursor-pointer rounded-2xl bg-(--color-primary) px-5 py-2 text-(--color-black) transition duration-300 hover:opacity-75">
								Add deck
							</button>
						</Dialog.Close>
					</div>
					<Dialog.Close asChild>
						<button
							type="submit"
							aria-label="Close"
							className="ease absolute top-4 right-4 cursor-pointer transition duration-300 hover:opacity-75"
						>
							<X className="h-5 w-5" />
						</button>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
