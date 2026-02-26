import styled from "styled-components";
import HeatmapSkeleton from "@/components/Heatmap/Skeleton";

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
			<HeatmapSkeleton />
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

const SkeletonBase = styled.span`
	animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	background-color: var(--color-gray-200);
	border-radius: 0.375rem;

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
	height: 5rem;
	width: 100%;
	max-width: 5rem;
	border-radius: 9999px;
`;

const TextGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
`;
