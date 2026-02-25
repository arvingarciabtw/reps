import styled from "styled-components";
import { Dialog } from "radix-ui";

const UpdateButton = styled.button`
	cursor: pointer;
	border-radius: 50%;
	padding: 0.375rem;
	transition-property: all;
	transition-timing-function: ease;
	transition-duration: 300ms;
	background-color: transparent;
	border: none;

	&:hover {
		background-color: var(--color-gray-100);
	}

	html.dark & {
		&:hover {
			background-color: var(--color-gray-700);
		}
	}
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

const CancelButton = styled.button`
	display: flex;
	cursor: pointer;
	align-items: center;
	gap: 0.5rem;
	border-radius: 1rem;
	border: 1px solid var(--color-gray-200);
	background-color: transparent;
	padding: 0.5rem 1.25rem;
	color: var(--color-gray-600);
	transition-property: all;
	transition-timing-function: ease;
	transition-duration: 300ms;

	&:hover {
		background-color: #f3f4f6;
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}

	html.dark & {
		border-color: var(--color-gray-700);
		background-color: var(--color-gray-700);
		color: var(--color-gray-300);

		&:hover {
			background-color: var(--color-gray-700);
			opacity: 0.75;
		}
	}
`;

const StyledDialogOverlay = styled(Dialog.Overlay)`
	position: fixed;
	inset: 0;
	background-color: var(--color-black);
	opacity: 0.75;
`;

const StyledDialogContent = styled(Dialog.Content)`
	position: fixed;
	top: 50%;
	left: 50%;
	display: flex;
	width: 100%;
	max-width: 20rem;
	transform: translate(-50%, -50%);
	flex-direction: column;
	border-radius: 1rem;
	border: 1px solid var(--color-gray-700);
	background-color: var(--color-white);
	padding: 1.5rem;
	color: var(--color-gray-300);
	outline: none;

	html.dark & {
		background-color: var(--color-gray-800);
	}
`;

const StyledDialogTitle = styled(Dialog.Title)`
	margin-bottom: 0.5rem;
	font-size: 1.5rem;
	line-height: 2rem;
	font-weight: 500;
	color: var(--color-gray-800);

	html.dark & {
		color: var(--color-white);
	}
`;

const Form = styled.form`
	margin-top: 0.5rem;
	display: flex;
	flex-direction: column;
`;

const Fieldset = styled.fieldset`
	display: flex;
	width: 100%;
	align-items: center;
	gap: 0.75rem;
	border: none;
	padding: 0;
	margin: 0;
`;

const Input = styled.input`
	width: 100%;
	border-radius: 0.375rem;
	background-color: var(--color-gray-100);
	padding: 0.5rem 0.75rem;
	color: var(--color-gray-800);
	opacity: 0.75;
	border: none;

	&::placeholder {
		color: var(--color-gray-300);
	}

	&:focus {
		outline: none;
		box-shadow: 0 0 0 1px var(--color-gray-800);
	}

	html.dark & {
		background-color: var(--color-black);
		color: var(--color-gray-300);

		&::placeholder {
			color: var(--color-gray-600);
		}

		&:focus {
			box-shadow: 0 0 0 1px var(--color-primary);
		}
	}
`;

const SubmitButtonsWrapper = styled.div`
	margin-top: 1.5rem;
	display: flex;
	gap: 1rem;
	align-self: flex-end;
`;

const SubmitButton = styled.button`
	display: flex;
	cursor: pointer;
	align-items: center;
	gap: 0.5rem;
	border-radius: 1rem;
	border: 1px solid var(--color-gray-200);
	background-color: transparent;
	padding: 0.5rem 1.25rem;
	color: var(--color-gray-600);
	transition-property: all;
	transition-timing-function: ease;
	transition-duration: 300ms;

	&:hover {
		background-color: #f3f4f6;
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}

	html.dark & {
		border-color: var(--color-gray-700);
		background-color: var(--color-gray-700);
		color: var(--color-gray-300);

		&:hover {
			background-color: var(--color-gray-700);
			opacity: 0.75;
		}
	}
`;

export {
	UpdateButton,
	HiddenLabel,
	CancelButton,
	StyledDialogOverlay,
	StyledDialogContent,
	StyledDialogTitle,
	Form,
	Fieldset,
	Input,
	SubmitButtonsWrapper,
	SubmitButton,
};
