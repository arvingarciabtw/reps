import type { DeckType } from "@/lib/definitions";
import { fetchDecks } from "@/lib/queries";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Layers } from "react-feather";
import Deck from "@/ui/deck/deck";
import CreateDeck from "@/ui/deck/create-deck";

export default function Home() {
	return (
		<>
			<Dashboard />
		</>
	);
}

function Dashboard() {
	return (
		<>
			<Decks />
			<CreateDeck />
		</>
	);
}

async function Decks() {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session) return <p>Unauthorized.</p>;

	const decks = await fetchDecks(session.user.id);

	return (
		<>
			<h1 className="text-4xl font-medium dark:text-(--color-white)">Decks</h1>
			<p className="mt-4 mb-10 max-w-lg text-(--color-gray-600) dark:text-(--color-gray-300)">
				All of your decks are below. Click on a deck to start reviewing. Click
				on the add button on the bottom right to create a deck. View your cards
				by clicking on the <Layers className="mx-1 inline h-4.5 w-4.5" /> icon.
			</p>
			<section className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3">
				{decks.map((deck: DeckType) => (
					<Deck key={deck.id} deckName={deck.title} deckId={deck.id} />
				))}
			</section>
		</>
	);
}
