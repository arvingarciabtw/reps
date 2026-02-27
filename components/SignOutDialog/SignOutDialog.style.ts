import styled from "styled-components";
import { AlertDialog } from "radix-ui";

const StyledOverlay = styled(AlertDialog.Overlay)`
	position: fixed;
	inset: 0;
	background-color: var(--color-gray-900);
	opacity: 0.75;
`;

const StyledContent = styled(AlertDialog.Content)`
	padding: var(--space-lg);
	width: 100%;
	max-width: 20rem;
	position: fixed;
	top: 50%;
	left: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: var(--radius-md);
	border: 1px solid var(--color-gray-700);
	background-color: var(--color-bg);
	color: var(--color-gray-300);
	outline: none;
	transform: translate(-50%, -50%);
`;

const StyledTitle = styled(AlertDialog.Title)`
	margin-bottom: var(--space-xs);
	font-size: var(--font-xl);
	line-height: 2rem;
	font-weight: var(--weight-medium);
	color: var(--color-fg);
`;

const StyledDescription = styled(AlertDialog.Description)`
	margin-bottom: var(--space-md);
	text-align: center;
	color: var(--color-gray-700);

	html.dark & {
		color: var(--color-gray-300);
	}
`;

const ButtonGroup = styled.div`
	display: flex;
	gap: var(--space-md);
`;

export {
	StyledOverlay,
	StyledContent,
	StyledTitle,
	StyledDescription,
	ButtonGroup,
};
