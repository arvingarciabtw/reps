"use server";

import type {
	HeatmapData,
	ReviewStats,
} from "@/components/Heatmap/Heatmap.types";
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

	const today = new Date();
	today.setHours(0, 0, 0, 0);

	const [totalReviews, dayReviews] = await Promise.all([
		prisma.reviewHistory.count({
			where: { userId },
		}),
		prisma.reviewHistory.count({
			where: {
				userId,
				reviewDate: today,
			},
		}),
	]);

	const yearReviews = reviews.reduce(
		(sum, review) => sum + review._count.id,
		0,
	);

	return {
		heatmapData,
		stats: {
			totalReviews,
			yearReviews,
			dayReviews,
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
