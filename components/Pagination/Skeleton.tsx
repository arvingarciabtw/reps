import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const PaginationWrapper = styled.div`
	margin-bottom: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.9375rem;
`;

const SkeletonBox = styled.span`
	height: 1.625rem;
	width: 1.625rem;
	border-radius: 0.375rem;
	animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	background-color: var(--color-gray-200);

	html.dark & {
		background-color: var(--color-gray-700);
	}
`;

export default function SkeletonPagination() {
	return (
		<PaginationWrapper>
			<SkeletonBox />
			<SkeletonBox />
			<SkeletonBox />
			<SkeletonBox />
			<SkeletonBox />
			<SkeletonBox />
			<SkeletonBox />
		</PaginationWrapper>
	);
}
