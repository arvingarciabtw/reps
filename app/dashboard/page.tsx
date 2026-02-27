import type { DeckType } from "@/components/Deck/Deck.types";
import Deck from "@/components/Deck";
import CreateDeck from "@/components/DeckClients/CreateDeck";
import { fetchDecks } from "@/lib/queries";
import { getSession } from "@/utils/session";
import styled from "styled-components";

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
	const session = await getSession();

	if (!session) return <ErrorText>Unauthorized.</ErrorText>;

	const decks = await fetchDecks(session.user.id);

	return (
		<>
			<Title>Decks</Title>
			<Description>
				All of your decks are below. Click on a deck to start reviewing. Click
				on the add button on the bottom right to create a deck.
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
	font-size: var(--font-2xl);
	font-weight: var(--weight-bold);
	color: var(--color-fg);
`;

const Description = styled.p`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: var(--space-md);
	margin-bottom: var(--space-2xl);
	max-width: 32rem;
	color: var(--color-gray-700);

	html.dark & {
		color: var(--color-gray-300);
	}
`;

const DeckGrid = styled.section`
	display: grid;
	grid-template-columns: repeat(1, minmax(0, 1fr));
	gap: var(--space-md);

	@media (min-width: 480px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	@media (min-width: 768px) {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}
`;

const ErrorText = styled.p`
	color: var(--color-gray-700);
	html.dark & {
		color: var(--color-gray-300);
	}
`;
