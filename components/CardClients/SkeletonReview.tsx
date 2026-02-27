import styled from "styled-components";

const Container = styled.div`
	margin-top: auto;
	margin-bottom: auto;
	display: flex;
	height: 12.5rem;
	width: 100%;
	flex-direction: column;
	align-items: center;
	gap: var(--space-md);
	align-self: center;

	@media (min-width: 640px) {
		width: 26rem;
	}
`;

const MainCardSkeleton = styled.div`
	position: relative;
	display: flex;
	height: 100%;
	min-height: 12.5rem;
	width: 100%;
	max-width: 26rem;
	flex: 1;
	flex-direction: column;
	overflow-y: auto;
	border-radius: var(--radius-xs);
	background-color: var(--color-gray-200);
	padding: var(--space-md);
	animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

	@media (min-width: 640px) {
		flex: 1;
	}

	html.dark & {
		background-color: var(--color-gray-700);
	}
`;

const ControlsWrapper = styled.div`
	display: flex;
	width: 100%;
	max-width: 26rem;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	gap: var(--space-xs);
`;

const TextSkeleton = styled.p`
	margin-right: auto;
	height: 1.5rem;
	width: 5.5rem;
	border-radius: 0.375rem;
	background-color: var(--color-gray-200);
	animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

	html.dark & {
		background-color: var(--color-gray-700);
	}
`;

const ActionGroup = styled.div`
	display: flex;
	gap: var(--space-md);
`;

const CircleButtonSkeleton = styled.button`
	height: 1.625rem;
	width: 1.625rem;
	border-radius: var(--radius-full);
	border: none;
	background-color: var(--color-gray-200);
	animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

	html.dark & {
		background-color: var(--color-gray-700);
	}
`;

export default function ReviewCardSkeleton() {
	return (
		<Container>
			<MainCardSkeleton />
			<ControlsWrapper>
				<TextSkeleton />
				<ActionGroup>
					<CircleButtonSkeleton />
					<CircleButtonSkeleton />
				</ActionGroup>
			</ControlsWrapper>
		</Container>
	);
}
