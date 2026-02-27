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
	max-width: 70rem;
	height: 100dvh;
	position: fixed;
	top: 50%;
	left: 50%;
	display: flex;
	flex-direction: column;
	border-radius: 0;
	border: 1px solid var(--color-gray-700);
	background-color: var(--color-bg);
	color: var(--color-gray-300);
	outline: none;
	transform: translate(-50%, -50%);
	overflow-y: auto;

	@media (min-width: 640px) {
		height: 40rem;
		border-radius: var(--radius-md);
	}
`;

const StyledDialogClose = styled(Dialog.Close)`
	padding: 0;
	background-color: transparent;
	color: var(--color-fg);
	border: none;
	cursor: pointer;
`;

const ButtonGroup = styled.div`
	margin-bottom: var(--space-lg);
	display: flex;
	gap: var(--space-lg);
	align-self: flex-end;
`;

const Content = styled.div`
	flex: 1;
	display: grid;
	place-items: center;
`;

const Prose = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: var(--space-md);

	/* Headings */
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0;
		color: var(--color-gray-700);

		.dark & {
			color: var(--color-gray-300);
		}
	}

	/* Paragraphs & Strong */
	p {
		margin: 0;
		width: 100%;
		color: var(--color-fg);
		text-align: center;
	}

	/* Inline Code */
	code {
		border-radius: 0.375rem;
		background-color: var(--color-gray-150);
		padding: 0.125rem 0.375rem;
		font-weight: var(--weight-regular);
		color: var(--color-gray-800);

		&::before,
		&::after {
			content: none;
		}

		.dark & {
			background-color: var(--color-gray-850);
			color: var(--color-gray-100);
		}
	}

	/* Code Blocks (Pre) */
	pre {
		min-width: 100%;
		max-width: 0rem;
		background-color: var(--color-gray-100);
		padding: var(--space-md);
		text-align: left;
		scrollbar-color: var(--color-gray-300) var(--color-bg);
		html.dark & {
			background-color: var(--color-gray-850);
			scrollbar-color: var(--color-gray-700) var(--color-gray-850);
		}

		/* Nested code inside pre blocks */
		code {
			background-color: var(--color-gray-100);
			padding: 0;
			color: var(--color-gray-800);

			.dark & {
				background-color: var(--color-gray-850);
				color: var(--color-gray-300);
			}
		}
	}

	/* Lists */
	ol,
	ul {
		padding-left: var(--space-md);
		display: flex;
		flex-direction: column;
		gap: var(--space-2xs);
		text-align: left;
		color: var(--color-gray-700);

		&::marker {
			color: var(--color-gray-700);
		}

		.dark & {
			color: var(--color-gray-300);
			&::marker {
				color: var(--color-gray-300);
			}
		}
	}

	li {
		margin: 0;
	}
`;

export {
	StyledDialogOverlay,
	StyledDialogContent,
	StyledDialogClose,
	ButtonGroup,
	Content,
	Prose,
};
