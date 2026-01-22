import prisma from "@/lib/prisma";

export async function fetchDecks(userId: string) {
	try {
		const decks = await prisma.deck.findMany({
			where: { userId },
		});
		return decks;
	} catch (err) {
		console.error("Database error:", err);
		throw new Error("Failed to fetch decks.");
	}
}

export async function fetchDeck(id: string) {
	try {
		const deck = await prisma.deck.findUnique({
			where: { id },
		});
		return deck;
	} catch (err) {
		console.error("Database error:", err);
		throw new Error("Failed to fetch deck.");
	}
}

export async function fetchCards(deckId: string) {
	try {
		const cards = await prisma.card.findMany({
			where: { deckId },
		});
		return cards;
	} catch (err) {
		console.error("Database error:", err);
		throw new Error("Failed to fetch cards.");
	}
}

export async function fetchCard(cardId: string) {
	try {
		const card = await prisma.card.findUnique({
			where: { id: cardId },
		});
		return card;
	} catch (err) {
		console.error("Database error:", err);
		throw new Error("Failed to fetch card.");
	}
}
