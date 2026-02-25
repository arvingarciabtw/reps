import styled from "styled-components";
import { Layers } from "react-feather";
import Deck from "@/components/Deck";
import CreateDeck from "@/components/DeckClients/CreateDeck";
import { fetchDecks } from "@/lib/queries";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import type { DeckType } from "@/lib/definitions";

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

	if (!session) return <ErrorText>Unauthorized.</ErrorText>;

	const decks = await fetchDecks(session.user.id);

	return (
		<>
			<Title>Decks</Title>
			<Description>
				All of your decks are below. Click on a deck to start reviewing. Click
				on the add button on the bottom right to create a deck. View your cards
				by clicking on the <InlineIcon /> icon.
			</Description>
			<DeckGrid>
				{decks.map((deck: DeckType) => (
					<Deck key={deck.id} deckName={deck.title} deckId={deck.id} />
				))}
			</DeckGrid>
		</>
	);
}

const Title = styled.h1`
	font-size: 2.25rem; /* text-4xl */
	font-weight: 500;

	html.dark & {
		color: var(--color-white);
	}
`;

const Description = styled.p`
	margin-top: 1rem;
	margin-bottom: 2.5rem; /* mb-10 */
	max-width: 32rem; /* max-w-lg */
	color: var(--color-gray-600);

	html.dark & {
		color: var(--color-gray-300);
	}
`;

const InlineIcon = styled(Layers)`
	margin-left: 0.25rem;
	margin-right: 0.25rem;
	display: inline;
	height: 1.125rem; /* h-4.5 */
	width: 1.125rem;
`;

const DeckGrid = styled.section`
	display: grid;
	grid-template-columns: repeat(1, minmax(0, 1fr));
	gap: 1rem;

	@media (min-width: 480px) {
		/* xs:grid-cols-2 */
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	@media (min-width: 768px) {
		/* md:grid-cols-3 */
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}
`;

const ErrorText = styled.p`
	color: var(--color-gray-600);
	html.dark & {
		color: var(--color-gray-300);
	}
`;
