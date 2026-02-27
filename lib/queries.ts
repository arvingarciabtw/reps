import prisma from "@/lib/prisma";
import { unstable_cache } from "next/cache";

export const fetchDecks = unstable_cache(
	async (userId: string) => {
		try {
			const decks = await prisma.deck.findMany({
				where: { userId },
			});
			return decks;
		} catch (err) {
			console.error("Database error:", err);
			throw new Error("Failed to fetch decks.");
		}
	},
	["decks"],
	{ revalidate: false },
);

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

export async function fetchFilteredCards(
	deckId: string,
	page: number = 1,
	pageSize: number = 10,
	substring: string,
) {
	try {
		const skip = (page - 1) * pageSize;

		const filter = {
			deckId,
			OR: [
				{ front: { contains: substring, mode: "insensitive" as const } },
				{ back: { contains: substring, mode: "insensitive" as const } },
			],
		};

		const [cards, totalCount] = await Promise.all([
			prisma.card.findMany({ where: filter, skip, take: pageSize }),
			prisma.card.count({ where: filter }),
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
		});

		return cards.sort(() => Math.random() - 0.5);
	} catch (err) {
		console.error("Database error:", err);
		throw new Error("Failed to fetch cards for review.");
	}
}
