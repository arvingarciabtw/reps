import styled from "styled-components";

const PaginationWrapper = styled.div`
	margin-bottom: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.9375rem;
`;

const SkeletonBox = styled.span`
	display: inline-block;
	height: 1.625rem;
	width: 1.625rem;
	border-radius: 0.375rem;
	background-color: var(--color-gray-200);
	animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

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
