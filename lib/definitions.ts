export type SessionType = {
	session: {
		id: string;
		userId: string;
		token: string;
		expiresAt: Date;
		ipAddress?: string | null;
		userAgent?: string | null;
		createdAt: Date;
		updatedAt: Date;
	};
	user: {
		id: string;
		email: string;
		emailVerified: boolean;
		name: string;
		image?: string | null;
		createdAt: Date;
		updatedAt: Date;
	};
} | null;

export type DeckType = {
	id: string;
	title: string;
	createdAt: Date;
	userId: string;
};

export type CardType = {
	id: string;
	front: string;
	back: string;
	deckId: string;
};

export type HeatmapData = {
	date: string;
	count: number;
};

export type ReviewStats = {
	totalReviews: number;
	yearReviews: number;
	currentStreak: number;
};
