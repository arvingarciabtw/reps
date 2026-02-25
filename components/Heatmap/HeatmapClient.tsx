"use client";

import React from "react";
import { useRouter } from "next/navigation";
import type {
	HeatmapData,
	ReviewStats,
} from "@/components/Heatmap/Heatmap.types";
import { HeatmapClientWrapper } from "@/components/Heatmap/Heatmap.style";
import HeatmapDescription from "@/components/Heatmap/HeatmapDescription";
import HeatmapLegends from "@/components/Heatmap/HeatmapLegends";
import HeatmapGrid from "@/components/Heatmap/HeatmapGrid";

export default function HeatmapClient({
	initialData,
	initialStats,
	initialYear,
	availableYears,
}: {
	initialData: HeatmapData[];
	initialStats: ReviewStats;
	initialYear: number;
	availableYears: number[];
}) {
	const router = useRouter();
	const [isPending, startTransition] = React.useTransition();

	const getHeatmapColor = (count: number) => {
		if (count === 0)
			return "background-color: var(--color-gray-100); html.dark & { background: var(--color-gray-800) }";

		const maxCount = Math.max(...initialData.map((d) => d.count), 1);
		const intensity = count / maxCount;

		switch (true) {
			case intensity <= 0.2:
				return "background-color: var(--color-primary); opacity: 0.3;";
			case intensity <= 0.4:
				return "background-color: var(--color-primary); opacity: 0.5;";
			case intensity <= 0.6:
				return "background-color: var(--color-primary); opacity: 0.7;";
			case intensity <= 0.8:
				return "background-color: var(--color-primary); opacity: 0.85;";
			default:
				return "background-color: var(--color-primary); opacity: 1;";
		}
	};

	const generateCalendar = React.useMemo(() => {
		const calendar: { date: Date; count: number }[][] = [];
		const startOfYear = new Date(initialYear, 0, 1);
		const endOfYear = new Date(initialYear, 11, 31);
		const startDate = new Date(startOfYear);

		const startDay = startDate.getDay();
		startDate.setDate(startDate.getDate() - startDay);

		const currentDate = new Date(startDate);

		const dataMap = new Map(initialData.map((d) => [d.date, d.count]));

		while (currentDate <= endOfYear || currentDate.getDay() !== 0) {
			const week = [];

			for (let i = 0; i < 7; i++) {
				const dateStr = currentDate.toISOString().split("T")[0];
				const count = dataMap.get(dateStr) || 0;

				week.push({
					date: new Date(currentDate),
					count,
				});

				currentDate.setDate(currentDate.getDate() + 1);
			}

			calendar.push(week);
		}

		return calendar;
	}, [initialYear, initialData]);

	const handleYearChange = (year: string) => {
		startTransition(() => {
			const params = new URLSearchParams(window.location.search);
			params.set("year", year);
			router.push(`${window.location.pathname}?${params.toString()}`);
		});
	};

	return (
		<HeatmapClientWrapper>
			<HeatmapDescription
				initialStats={initialStats}
				initialYear={initialYear}
				availableYears={availableYears}
				isPending={isPending}
				handleYearChange={handleYearChange}
			/>
			<HeatmapGrid
				getHeatmapColor={getHeatmapColor}
				generateCalendar={generateCalendar}
			/>
			<HeatmapLegends />
		</HeatmapClientWrapper>
	);
}
