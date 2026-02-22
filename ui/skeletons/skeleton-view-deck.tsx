import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	color: var(--color-gray-300);
`;

const SkeletonBase = styled.span`
	animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	background-color: var(--color-gray-200);
	border-radius: 0.375rem;

	html.dark & {
		background-color: var(--color-gray-700);
	}
`;

const TextGroup = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.75rem;
`;

const ButtonGroup = styled.div`
	display: flex;
	justify-content: center;
	gap: 1rem;
`;

const LargeButtonSkeleton = styled(SkeletonBase)`
	height: 2.625rem;
	border-radius: 0.5rem;
`;

export default function ViewDeckSkeleton() {
	return (
		<Container>
			<TextGroup>
				<SkeletonBase style={{ height: "1.25rem", width: "20rem" }} />
				<SkeletonBase style={{ height: "1.25rem", width: "17.5rem" }} />
			</TextGroup>
			<ButtonGroup>
				<LargeButtonSkeleton style={{ width: "7.375rem" }} />
				<LargeButtonSkeleton style={{ width: "5.75rem" }} />
			</ButtonGroup>
		</Container>
	);
}
