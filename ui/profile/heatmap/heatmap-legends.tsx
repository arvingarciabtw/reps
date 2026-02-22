import {
	LegendsWrapper,
	Label,
	ColorsWrapper,
	Color,
} from "@/ui/profile/heatmap/heatmap.style";

function HeatmapLegends() {
	return (
		<LegendsWrapper>
			<Label>Less</Label>
			<ColorsWrapper>
				{[0, 0.2, 0.4, 0.6, 0.8, 1].map((intensity, index) => (
					<Color key={index} $intensity={intensity} />
				))}
			</ColorsWrapper>
			<Label>More</Label>
		</LegendsWrapper>
	);
}

export default HeatmapLegends;
