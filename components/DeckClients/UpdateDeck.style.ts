import styled from "styled-components";
import { Dialog } from "radix-ui";

const StyledDialogOverlay = styled(Dialog.Overlay)`
	position: fixed;
	inset: 0;
	background-color: var(--color-gray-900);
	opacity: 0.75;
`;

const StyledDialogContent = styled(Dialog.Content)`
	padding: var(--space-lg);
	width: 100%;
	max-width: 20rem;
	position: fixed;
	top: 50%;
	left: 50%;
	display: flex;
	flex-direction: column;
	border-radius: var(--radius-md);
	border: 1px solid var(--color-gray-700);
	background-color: var(--color-bg);
	color: var(--color-gray-300);
	outline: none;
	transform: translate(-50%, -50%);
`;

const StyledDialogTitle = styled(Dialog.Title)`
	margin-bottom: var(--space-xs);
	font-size: var(--font-xl);
	line-height: 2rem;
	font-weight: var(--weight-medium);
	color: var(--color-fg);
`;

const Form = styled.form`
	margin-top: var(--space-xs);
	display: flex;
	flex-direction: column;
`;

const Fieldset = styled.fieldset`
	padding: 0;
	margin: 0;
	width: 100%;
	display: flex;
	align-items: center;
	gap: var(--space-sm);
	border: none;
`;

const Input = styled.input`
	width: 100%;
	border-radius: var(--radius-xs);
	background-color: var(--color-gray-150);
	padding: var(--space-xs) var(--space-md);
	color: var(--color-fg);
	opacity: 0.75;
	border: 1px solid var(--color-gray-200);

	&::placeholder {
		color: var(--color-gray-300);
	}

	html.dark & {
		background-color: var(--color-gray-850);
		border-color: var(--color-gray-750);

		&::placeholder {
			color: var(--color-gray-600);
		}
	}
`;

const SubmitButtonsWrapper = styled.div`
	margin-top: var(--space-lg);
	display: flex;
	gap: var(--space-md);
	align-self: flex-end;
`;

const HiddenLabel = styled.label`
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	white-space: nowrap;
	border-width: 0;
`;

export {
	HiddenLabel,
	StyledDialogOverlay,
	StyledDialogContent,
	StyledDialogTitle,
	Form,
	Fieldset,
	Input,
	SubmitButtonsWrapper,
};
