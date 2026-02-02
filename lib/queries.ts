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

export async function fetchCards(
	deckId: string,
	page: number = 1,
	pageSize: number = 10,
) {
	try {
		const skip = (page - 1) * pageSize;

		const [cards, totalCount] = await Promise.all([
			prisma.card.findMany({
				where: { deckId },
				skip,
				take: pageSize,
			}),
			prisma.card.count({ where: { deckId } }),
		]);

		return {
			cards,
			totalCount,
			totalPages: Math.ceil(totalCount / pageSize),
			currentPage: page,
		};
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

export async function fetchCardsForReview(deckId: string) {
	try {
		const now = new Date();
		now.setHours(0, 0, 0, 0);

		const cards = await prisma.card.findMany({
			where: {
				deckId,
				dateToDisplay: {
					lte: now,
				},
			},
			orderBy: {
				dateToDisplay: "asc",
			},
		});

		return cards;
	} catch (err) {
		console.error("Database error:", err);
		throw new Error("Failed to fetch cards for review.");
	}
}
