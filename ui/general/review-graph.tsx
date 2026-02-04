import ReviewGraphClient from "./review-graph-client";
import {
	fetchReviewHeatmapData,
	fetchAvailableYears,
} from "@/actions/review-history-actions";

export default async function ReviewGraph({ year }: { year?: number }) {
	const currentYear = year || new Date().getFullYear();
	const [data, availableYears] = await Promise.all([
		fetchReviewHeatmapData(currentYear),
		fetchAvailableYears(),
	]);

	return (
		<ReviewGraphClient
			initialData={data.heatmapData}
			initialStats={data.stats}
			initialYear={currentYear}
			availableYears={availableYears}
		/>
	);
}

export function ReviewGraphSkeleton() {
	return (
		<div className="flex w-full flex-col gap-4">
			<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
				<div className="flex flex-col gap-0">
					<h2 className="text-base">Review Activity</h2>
					<div className="flex flex-wrap gap-4 text-sm text-gray-500">
						<span>Loading...</span>
					</div>
				</div>
			</div>
			<div className="h-32 animate-pulse rounded-lg bg-gray-800" />
		</div>
	);
}
