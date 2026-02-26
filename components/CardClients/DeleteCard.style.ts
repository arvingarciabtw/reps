import styled from "styled-components";
import { AlertDialog } from "radix-ui";

const Overlay = styled(AlertDialog.Overlay)`
	position: fixed;
	inset: 0;
	background-color: var(--color-black);
	opacity: 0.75;
`;

const ModalContent = styled(AlertDialog.Content)`
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

const ModalTitle = styled(AlertDialog.Title)`
	margin-bottom: 0.5rem;
	font-size: 1.5rem;
	font-weight: 500;
	color: var(--color-gray-800);

	html.dark & {
		color: var(--color-white);
	}
`;

const ModalDescription = styled(AlertDialog.Description)`
	margin-bottom: 1rem;
	text-align: center;
	color: var(--color-gray-600);

	html.dark & {
		color: var(--color-gray-300);
	}
`;

export { Overlay, ModalContent, ModalTitle, ModalDescription };
