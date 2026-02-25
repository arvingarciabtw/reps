import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const OuterWrapper = styled.div`
	margin: auto;
	display: flex;
	width: 100%;
	flex-direction: column;
	text-align: center;
	color: var(--color-gray-300);
`;

const InnerWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const SkeletonBase = styled.div`
	animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	background-color: var(--color-gray-200);
	border-radius: 0.375rem;

	html.dark & {
		background-color: var(--color-gray-700);
	}
`;

const HeaderContainer = styled.div`
	display: flex;
	width: 100%;
	max-width: 30rem;
	flex-direction: column;
	align-items: center;
	gap: 0.75rem;
	align-self: center;
`;

const ButtonContainer = styled.div`
	margin-top: 1rem;
	margin-bottom: 1.5rem;
	display: flex;
	align-items: center;
	gap: 1rem;
	align-self: center;
`;

const ContentGrid = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	@media (min-width: 640px) {
		flex-direction: row;
	}
`;

const InputColumn = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	@media (min-width: 640px) {
		flex: 1;
	}
`;

const Section = styled.section`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;

	@media (min-width: 640px) {
		flex: 1;
	}
`;

const OutputSection = styled(Section)`
	width: 100%;
	align-self: stretch;
`;

const TextAreaSkeleton = styled(SkeletonBase)`
	min-height: 12.5rem;
	width: 100%;
	border-radius: 0.5rem;

	@media (min-width: 640px) {
		min-height: 6.25rem;
	}
`;

const BigCardSkeleton = styled(SkeletonBase)`
	min-height: 12.5rem;
	flex: 1;
	border-radius: 0.5rem;
`;

export default function CreateAndUpdateCardSkeleton() {
	return (
		<OuterWrapper>
			<HeaderContainer>
				<SkeletonBase style={{ height: "1.25rem", width: "100%" }} />
				<SkeletonBase style={{ height: "1.25rem", width: "75%" }} />
			</HeaderContainer>
			<InnerWrapper>
				<ButtonContainer>
					<SkeletonBase
						style={{ height: "2.5rem", width: "7rem", borderRadius: "0.5rem" }}
					/>
					<SkeletonBase
						style={{ height: "2.5rem", width: "7rem", borderRadius: "0.5rem" }}
					/>
				</ButtonContainer>
				<ContentGrid>
					<InputColumn>
						<Section>
							<SkeletonBase style={{ height: "1.25rem", width: "4rem" }} />
							<TextAreaSkeleton />
						</Section>
						<Section>
							<SkeletonBase style={{ height: "1.25rem", width: "4rem" }} />
							<TextAreaSkeleton />
						</Section>
					</InputColumn>
					<OutputSection>
						<SkeletonBase style={{ height: "1.25rem", width: "5rem" }} />
						<BigCardSkeleton />
					</OutputSection>
				</ContentGrid>
			</InnerWrapper>
		</OuterWrapper>
	);
}
