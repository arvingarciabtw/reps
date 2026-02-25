import styled, { keyframes } from "styled-components";

export default function Loading() {
	return (
		<Container>
			<ProfileSection>
				<AvatarSkeleton />
				<TextGroup>
					<SkeletonBase style={{ height: "1.25rem", width: "12.5rem" }} />
					<SkeletonBase
						as="p"
						style={{ height: "1.25rem", width: "12.5rem" }}
					/>
				</TextGroup>
			</ProfileSection>

			<HeatmapWrapper>
				<HeatmapHeader>
					<div
						style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
					>
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
		</Container>
	);
}

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem; /* gap-8 */
`;

const SkeletonBase = styled.span`
	animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	background-color: var(--color-gray-200);
	border-radius: 0.375rem; /* rounded-md */

	html.dark & {
		background-color: var(--color-gray-700);
	}
`;

const ProfileSection = styled.section`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

const AvatarSkeleton = styled(SkeletonBase)`
	height: 5rem; /* h-20 */
	width: 100%;
	max-width: 5rem; /* max-w-20 */
	border-radius: 9999px;
`;

const TextGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem; /* gap-3 */
`;

const HeatmapWrapper = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	gap: 1rem;
`;

const HeatmapHeader = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	@media (min-width: 640px) {
		flex-direction: row;
		align-items: flex-end;
		justify-content: space-between;
	}
`;

const StatsGroup = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
`;

const SmallSkeleton = styled(SkeletonBase)`
	border-radius: 0.125rem; /* rounded-sm */
`;

const GridSkeleton = styled(SkeletonBase)`
	height: 9.25rem; /* h-37 */
	overflow-x: auto;
	border-radius: 0.5rem; /* rounded-lg */
`;
