import styled from "styled-components";
import { AlertDialog } from "radix-ui";

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
const DeleteButton = styled.button`
	cursor: pointer;
	border-radius: 1rem;
	background-color: #ef4444;
	padding: 0.5rem 1.25rem;
	color: var(--color-white);
	transition-property: all;
	transition-timing-function: ease;
	transition-duration: 300ms;
	border: none;

	&:hover {
		opacity: 0.75;
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}
`;
const DeleteDeckButton = styled.button`
	cursor: pointer;
	border-radius: 9999px;
	padding: 0.375rem;
	background-color: transparent;
	border: none;
	transition-property: all;
	transition-timing-function: ease;
	transition-duration: 300ms;

	&:hover {
		background-color: var(--color-gray-100);
	}

	html.dark & {
		&:hover {
			background-color: var(--color-gray-700);
		}
	}
`;
const StyledAlertDialogOverlay = styled(AlertDialog.Overlay)`
	position: fixed;
	inset: 0;
	background-color: var(--color-black);
	opacity: 0.75;
`;

const StyledAlertDialogContent = styled(AlertDialog.Content)`
	position: fixed;
	top: 50%;
	left: 50%;
	display: flex;
	width: 100%;
	max-width: 20rem;
	transform: translate(-50%, -50%);
	flex-direction: column;
	align-items: center;
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

const StyledAlertDialogTitle = styled(AlertDialog.Title)`
	margin-bottom: 0.5rem;
	font-size: 1.5rem;
	line-height: 2rem;
	font-weight: 500;
	color: var(--color-gray-800);

	html.dark & {
		color: var(--color-white);
	}
`;

const StyledAlertDialogDescription = styled(AlertDialog.Description)`
	margin-bottom: 1rem;
	text-align: center;
	color: var(--color-gray-600);

	html.dark & {
		color: var(--color-gray-300);
	}
`;

const DeleteForm = styled.form`
	display: flex;
	gap: 1rem;
`;

export {
	CancelButton,
	DeleteButton,
	DeleteDeckButton,
	StyledAlertDialogOverlay,
	StyledAlertDialogContent,
	StyledAlertDialogTitle,
	StyledAlertDialogDescription,
	DeleteForm,
};
