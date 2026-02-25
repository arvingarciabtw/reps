import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const SkeletonBase = styled.div`
	animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	background-color: var(--color-gray-200);
	border-radius: 0.375rem;

	html.dark & {
		background-color: var(--color-gray-700);
	}
`;

const TitleSkeleton = styled(SkeletonBase)`
	height: 2.5rem;
	width: 8rem;
`;

const DescriptionWrapper = styled.div`
	margin-top: 1rem;
	margin-bottom: 2.5rem;
	display: flex;
	max-width: 32rem;
	flex-direction: column;
	gap: 0.75rem;
`;

const DescriptionLine = styled(SkeletonBase)<{ $width: string }>`
	height: 1.25rem;
	width: ${(props) => props.$width || "100%"};
`;

const DeckGrid = styled.section`
	display: grid;
	grid-template-columns: repeat(1, minmax(0, 1fr));
	gap: 1rem;

	@media (min-width: 480px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	@media (min-width: 768px) {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}
`;

const DeckCardSkeleton = styled(SkeletonBase)`
	display: flex;
	height: 3.625rem;
	align-items: center;
	justify-content: space-between;
	gap: 1.5rem;
	border-radius: 0.75rem;
	padding: 1rem;
	padding-left: 1.25rem;
`;

export default function ViewAllDecksSkeleton() {
	return (
		<>
			<TitleSkeleton />

			<DescriptionWrapper>
				<DescriptionLine $width="" />
				<DescriptionLine $width="80%" />
				<DescriptionLine $width="30%" />
			</DescriptionWrapper>

			<DeckGrid>
				{[...Array(6)].map((_, index) => (
					<DeckCardSkeleton key={index} as="article" />
				))}
			</DeckGrid>
		</>
	);
}
