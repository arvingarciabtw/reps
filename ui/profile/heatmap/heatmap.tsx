import HeatmapClient from "@/ui/profile/heatmap/heatmap-client";
import {
	fetchReviewHeatmapData,
	fetchAvailableYears,
} from "@/actions/review-history-actions";

export default async function Heatmap({ year }: { year?: number }) {
	const currentYear = year || new Date().getFullYear();
	const [data, availableYears] = await Promise.all([
		fetchReviewHeatmapData(currentYear),
		fetchAvailableYears(),
	]);

	return (
		<HeatmapClient
			initialData={data.heatmapData}
			initialStats={data.stats}
			initialYear={currentYear}
			availableYears={availableYears}
		/>
	);
}
