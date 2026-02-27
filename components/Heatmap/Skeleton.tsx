import styled from "styled-components";

function HeatmapSkeleton() {
	return (
		<HeatmapWrapper>
			<HeatmapHeader>
				<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
					<SkeletonBase style={{ height: "1.25rem", width: "7.5rem" }} />
					<StatsGroup>
						<SmallSkeleton style={{ height: "1rem", width: "7.5rem" }} />
						<SmallSkeleton style={{ height: "1rem", width: "7.5rem" }} />
						<SmallSkeleton style={{ height: "1rem", width: "7.5rem" }} />
					</StatsGroup>
				</div>
				<SkeletonBase style={{ height: "2.25rem", width: "6rem" }} />
			</HeatmapHeader>

			<GridSkeleton />

			<SmallSkeleton style={{ height: "1rem", width: "8.75rem" }} />
		</HeatmapWrapper>
	);
}

const HeatmapWrapper = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	gap: var(--space-md);
`;

const HeatmapHeader = styled.div`
	display: flex;
	flex-direction: column;
	gap: var(--space-md);

	@media (min-width: 640px) {
		flex-direction: row;
		align-items: flex-end;
		justify-content: space-between;
	}
`;

const StatsGroup = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: var(--space-md);
`;

const SkeletonBase = styled.span`
	animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	background-color: var(--color-gray-200);
	border-radius: 0.375rem;

	html.dark & {
		background-color: var(--color-gray-700);
	}
`;

const SmallSkeleton = styled(SkeletonBase)`
	border-radius: 0.125rem;
`;

const GridSkeleton = styled(SkeletonBase)`
	height: 9.25rem;
	overflow-x: auto;
	border-radius: var(--space-xs);
`;

export default HeatmapSkeleton;
