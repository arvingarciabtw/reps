import styled from "styled-components";
import SkeletonPagination from "@/components/Pagination/Skeleton";

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	align-self: flex-start;
	justify-self: flex-start;
`;

const SkeletonBase = styled.div`
	animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	background-color: var(--color-gray-200);

	html.dark & {
		background-color: var(--color-gray-700);
	}
`;

const CircleSkeleton = styled(SkeletonBase)`
	height: 1.25rem;
	width: 1.25rem;
	border-radius: var(--radius-full);
`;

const TextLineSkeleton = styled(SkeletonBase)`
	height: 1.25rem;
	width: 100%;
	border-radius: 0.375rem;
`;

const GridRow = styled.div`
	display: grid;
	grid-template-columns: 20px 1fr 1fr 20px 20px;
	align-items: center;
	gap: var(--space-md);
`;

const HeaderRow = styled(GridRow)`
	margin-bottom: var(--space-xs);
	border-bottom: 1px dashed var(--color-gray-700);
	padding-bottom: var(--space-md);
`;

const TableBody = styled.div`
	display: flex;
	flex-direction: column;
	gap: var(--space-lg);
	padding-top: var(--space-md);
`;

export default function ViewCardsSkeleton() {
	return (
		<Wrapper>
			<SkeletonPagination />

			<HeaderRow>
				<CircleSkeleton />
				<TextLineSkeleton />
				<TextLineSkeleton />
				<span /> {/* Spacer */}
				<CircleSkeleton />
			</HeaderRow>

			<TableBody>
				{[...Array(15)].map((_, index) => (
					<GridRow key={index}>
						<CircleSkeleton />
						<TextLineSkeleton />
						<TextLineSkeleton />
						<CircleSkeleton />
						<CircleSkeleton />
					</GridRow>
				))}
			</TableBody>
		</Wrapper>
	);
}
