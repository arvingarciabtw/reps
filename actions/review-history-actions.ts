"use server";

import type { HeatmapData, ReviewStats } from "@/lib/definitions";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import prisma from "@/lib/prisma";

export async function fetchReviewHeatmapData(year: number): Promise<{
	heatmapData: HeatmapData[];
	stats: ReviewStats;
}> {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session?.user?.id) {
		throw new Error("Unauthorized");
	}

	const userId = session.user.id;

	const startOfYear = new Date(year, 0, 1);
	const endOfYear = new Date(year, 11, 31, 23, 59, 59);

	const reviews = await prisma.reviewHistory.groupBy({
		by: ["reviewDate"],
		where: {
			userId,
			reviewDate: {
				gte: startOfYear,
				lte: endOfYear,
			},
		},
		_count: {
			id: true,
		},
		orderBy: {
			reviewDate: "asc",
		},
	});

	const heatmapData: HeatmapData[] = reviews.map((review) => ({
		date: review.reviewDate.toISOString().split("T")[0],
		count: review._count.id,
	}));

	const totalReviews = await prisma.reviewHistory.count({
		where: { userId },
	});

	const yearReviews = reviews.reduce(
		(sum, review) => sum + review._count.id,
		0,
	);

	const currentStreak = await calculateStreak(userId);

	return {
		heatmapData,
		stats: {
			totalReviews,
			yearReviews,
			currentStreak,
		},
	};
}

export async function fetchAvailableYears(): Promise<number[]> {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session?.user?.id) {
		throw new Error("Unauthorized");
	}

	const userId = session.user.id;

	const earliestReview = await prisma.reviewHistory.findFirst({
		where: { userId },
		orderBy: { reviewDate: "asc" },
		select: { reviewDate: true },
	});

	if (!earliestReview) {
		return [new Date().getFullYear()];
	}

	const startYear = earliestReview.reviewDate.getFullYear();
	const currentYear = new Date().getFullYear();

	const years: number[] = [];
	for (let year = currentYear; year >= startYear; year--) {
		years.push(year);
	}

	return years;
}

async function calculateStreak(userId: string): Promise<number> {
	const today = new Date();
	today.setHours(0, 0, 0, 0);

	let streak = 0;
	let currentDate = new Date(today);

	const recentReview = await prisma.reviewHistory.findFirst({
		where: {
			userId,
			reviewDate: {
				gte: new Date(today.getTime() - 24 * 60 * 60 * 1000),
			},
		},
	});

	if (!recentReview) {
		return 0;
	}

	while (true) {
		const reviewCount = await prisma.reviewHistory.count({
			where: {
				userId,
				reviewDate: currentDate,
			},
		});

		if (reviewCount > 0) {
			streak++;
			currentDate = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);
		} else {
			break;
		}
	}

	return streak;
}
