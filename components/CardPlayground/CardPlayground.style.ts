import styled from "styled-components";

const CardPlaygroundWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: var(--space-md);

	@media (min-width: 640px) {
		flex-direction: row;
	}
`;

const CardInputsGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: var(--space-md);

	@media (min-width: 640px) {
		flex: 1;
	}
`;

const CardBaseWrapper = styled.section`
	display: flex;
	flex-direction: column;
	gap: var(--space-xs);
	min-height: 18rem;
`;
const CardInputWrapper = styled(CardBaseWrapper)`
	flex: 1;
`;
const CardOutputWrapper = styled(CardBaseWrapper)`
	width: 100%;
	flex: 1;
	align-self: stretch;
`;

const CardInputTopWrapper = styled.div`
	display: grid;
	grid-template-columns: 72px 18px;
	align-items: center;
`;

const CardInputHeading = styled.label`
	align-self: flex-start;
	color: var(--color-fg);
	font-weight: bold;
	letter-spacing: 0.05rem;
	text-transform: uppercase;
`;
const CardOutputHeading = styled.h1`
	align-self: flex-start;
	font-size: var(--font-md);
	font-weight: var(--weight-bold);
	color: var(--color-fg);
	text-transform: uppercase;
	letter-spacing: 0.05rem;
`;

const TextArea = styled.textarea`
	flex: 1;
	width: 100%;
	resize: none;
	overflow-y: auto;
	border-radius: var(--radius-xs);
	background-color: var(--color-gray-150);
	padding: var(--space-md);
	font-family:
		ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
		"Courier New", monospace;
	font-size: var(--font-sm);
	line-height: 1.25rem;
	color: var(--color-gray-800);
	border: none;
	scrollbar-color: var(--color-gray-300) var(--color-gray-150);

	&:focus {
		outline: 1px solid var(--color-gray-100);
	}

	@media (min-width: 640px) {
		min-height: 6.25rem;
	}

	html.dark & {
		background-color: var(--color-gray-850);
		color: var(--color-gray-300);
		scrollbar-color: var(--color-gray-700) var(--color-gray-850);

		&:focus {
			outline-color: var(--color-gray-700);
		}
	}
`;

export {
	CardPlaygroundWrapper,
	CardInputsGroup,
	CardInputWrapper,
	CardOutputWrapper,
	CardInputTopWrapper,
	CardInputHeading,
	CardOutputHeading,
	TextArea,
};
