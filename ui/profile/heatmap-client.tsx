"use client";

import { format } from "date-fns";
import { useMemo, useTransition } from "react";
import { useRouter } from "next/navigation";
import * as CONSTANTS from "@/lib/constants/heatmap";
import { Tooltip } from "radix-ui";
import { Select } from "radix-ui";
import { ChevronDown } from "react-feather";
import type { HeatmapData, ReviewStats } from "@/lib/definitions";

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
	const [isPending, startTransition] = useTransition();

	const getHeatmapColor = (count: number) => {
		if (count === 0) return "bg-(--color-gray-100) dark:bg-gray-800";

		const maxCount = Math.max(...initialData.map((d) => d.count), 1);
		const intensity = count / maxCount;

		switch (true) {
			case intensity <= 0.2:
				return "bg-primary opacity-30";
			case intensity <= 0.4:
				return "bg-primary opacity-50";
			case intensity <= 0.6:
				return "bg-primary opacity-70";
			case intensity <= 0.8:
				return "bg-primary opacity-85";
			default:
				return "bg-primary opacity-100";
		}
	};

	const generateCalendar = useMemo(() => {
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
		<div className="flex w-full flex-col gap-4">
			<HeatmapDescription
				initialStats={initialStats}
				initialYear={initialYear}
				availableYears={availableYears}
				isPending={isPending}
				handleYearChange={handleYearChange}
			/>
			<Heatmap
				getHeatmapColor={getHeatmapColor}
				generateCalendar={generateCalendar}
			/>
			<Legends />
		</div>
	);
}

function HeatmapDescription({
	initialStats,
	initialYear,
	availableYears,
	isPending,
	handleYearChange,
}: {
	initialStats: ReviewStats;
	initialYear: number;
	availableYears: number[];
	isPending: boolean;
	handleYearChange: (year: string) => void;
}) {
	return (
		<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
			<div className="flex flex-col gap-0">
				<h2 className="mb-1 text-base">Review Activity</h2>
				<div className="flex flex-wrap gap-4 gap-y-0 text-sm text-(--color-gray-400) dark:text-gray-500">
					<span>
						{initialStats.totalReviews.toLocaleString()} total reviews
					</span>
					<span>
						{initialStats.yearReviews.toLocaleString()} reviews this year
					</span>
					<span>{initialStats.dayReviews.toLocaleString()} reviews today</span>
				</div>
			</div>

			<Select.Root
				value={initialYear.toString()}
				onValueChange={handleYearChange}
				disabled={isPending}
			>
				<Select.Trigger
					className="flex w-23.5 cursor-pointer items-center gap-3 rounded-xl bg-(--color-gray-100) py-2 pr-3 pl-4.5 text-sm text-(--color-gray-800) outline-0 disabled:opacity-50 dark:bg-(--color-gray-800) dark:text-(--color-gray-300)"
					aria-label="year"
				>
					<Select.Value
						className="text-(--color-gray-300)"
						placeholder={initialYear.toString()}
					/>
					<Select.Icon>
						<ChevronDown className="h-4 w-4" />
					</Select.Icon>
				</Select.Trigger>
				<Select.Portal>
					<Select.Content
						className="w-23.5 rounded-2xl bg-(--color-gray-100) px-3 py-3 shadow-xl shadow-gray-950/25 dark:bg-(--color-gray-800)"
						position="popper"
						sideOffset={8}
					>
						<Select.ScrollUpButton />
						<Select.Viewport>
							<Select.Group className="flex flex-col gap-2">
								{availableYears.map((year) => (
									<Select.Item
										key={year}
										className="ease grid cursor-pointer place-items-center rounded-lg py-1 text-sm text-(--color-gray-800) outline-0 transition duration-300 hover:bg-(--color-gray-800) hover:text-(--color-white) dark:text-(--color-gray-300) dark:hover:bg-(--color-primary) dark:hover:text-(--color-black)"
										value={year.toString()}
									>
										<Select.ItemText>{year}</Select.ItemText>
									</Select.Item>
								))}
							</Select.Group>
						</Select.Viewport>
						<Select.ScrollDownButton />
					</Select.Content>
				</Select.Portal>
			</Select.Root>
		</div>
	);
}

function Heatmap({
	getHeatmapColor,
	generateCalendar,
}: {
	getHeatmapColor: (count: number) => string;
	generateCalendar: { date: Date; count: number }[][];
}) {
	return (
		<div className="overflow-x-auto pb-2">
			<div className="inline-flex min-w-fit gap-2">
				{/* Weekday labels */}
				<div className="flex flex-col gap-1 pt-6">
					{CONSTANTS.WEEKDAYS.map((day, index) => (
						<div
							key={index}
							className="h-3 w-8 text-xs leading-3 text-gray-400"
						>
							{day}
						</div>
					))}
				</div>

				{/* Calendar grid */}
				<div className="flex flex-col gap-1">
					{/* Month labels */}
					<div className="relative mb-1 h-5">
						<div
							className="absolute top-0 left-0 grid gap-1 text-xs text-gray-400"
							style={{
								gridTemplateColumns: `repeat(${generateCalendar.length}, 1fr)`,
							}}
						>
							{generateCalendar.map((_, weekIndex) => {
								const weekDate = generateCalendar[weekIndex][0].date;
								const monthStart = weekDate.getDate() <= 7;
								const monthName = monthStart
									? CONSTANTS.MONTHS[weekDate.getMonth()]
									: "";

								return (
									<div key={weekIndex} className="w-3 text-center">
										{monthName}
									</div>
								);
							})}
						</div>
					</div>

					{/* Weeks */}
					<div
						className="grid gap-1"
						style={{
							gridTemplateColumns: `repeat(${generateCalendar.length}, 1fr)`,
						}}
					>
						{Array.from({ length: 7 }).map((_, dayIndex) => (
							<div key={dayIndex} className="contents">
								{generateCalendar.map((week, weekIndex) => {
									const day = week[dayIndex];
									return (
										<Tooltip.Provider key={`${weekIndex}-${dayIndex}`}>
											<Tooltip.Root>
												<Tooltip.Trigger asChild>
													<div
														className={`h-3 w-3 cursor-pointer rounded-sm transition-all duration-200 ${getHeatmapColor(day.count)} ease transition duration-300 hover:opacity-50`}
													/>
												</Tooltip.Trigger>
												<Tooltip.Portal>
													<Tooltip.Content
														className="rounded-md bg-(--color-gray-800) px-2 py-1 text-sm text-(--color-gray-300) shadow-xl shadow-gray-950/25"
														sideOffset={5}
													>
														{day.count === 0
															? `No reviews on ${format(day.date, "MMM do")}.`
															: `${day.count} ${day.count === 1 ? "review" : "reviews"} on ${format(day.date, "MMM do")}.`}
														<Tooltip.Arrow className="fill-(--color-gray-800)" />
													</Tooltip.Content>
												</Tooltip.Portal>
											</Tooltip.Root>
										</Tooltip.Provider>
									);
								})}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

function Legends() {
	return (
		<div className="flex items-center gap-2 text-xs text-gray-400">
			<span>Less</span>
			<div className="flex gap-1">
				{[0, 0.2, 0.4, 0.6, 0.8, 1].map((intensity, index) => (
					<div
						key={index}
						className={`h-3 w-3 rounded-sm ${
							intensity === 0 ? "bg-gray-100 dark:bg-gray-800" : "bg-primary"
						}`}
						style={{
							opacity: intensity === 0 ? 1 : intensity,
						}}
					/>
				))}
			</div>
			<span>More</span>
		</div>
	);
}
