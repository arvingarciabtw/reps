import type { DeckType } from "@/lib/definitions";
import { fetchDecks } from "@/lib/queries";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Deck from "@/ui/deck/deck";
import AddDeckModal from "@/ui/deck/create-deck";

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
			<AddDeckModal />
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
			<h1 className="text-4xl font-medium">Decks</h1>
			<p className="mt-4 mb-10 max-w-lg text-(--color-gray-300)">
				All of your decks are below. Click on a deck to interact with its
				contents. Click on the add button on the bottom right to create a deck.
			</p>
			<section className="grid grid-cols-1 gap-4 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
				{decks.map((deck: DeckType) => (
					<Deck key={deck.id} deckName={deck.title} deckId={deck.id} />
				))}
			</section>
		</>
	);
}
