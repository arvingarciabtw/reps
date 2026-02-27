import styled from "styled-components";
import { motion } from "motion/react";

const OuterCardWrapper = styled(motion.div)`
	padding: var(--space-md);
	width: 100%;
	max-width: 26rem;
	min-height: 12.5rem;
	display: flex;
	flex-direction: column;
	background-color: var(--color-gray-150);
	border-radius: var(--radius-xs);
	cursor: pointer;
	overflow-y: auto;
	scrollbar-color: var(--color-gray-300) var(--color-gray-150);
	html.dark & {
		background-color: var(--color-gray-850);
		scrollbar-color: var(--color-gray-700) var(--color-gray-850);
	}

	@media (min-width: 640px) {
		& {
			flex: 1 1 0%;
		}
	}
`;

const InnerCardWrapper = styled(motion.div)`
	position: relative;
	flex: 1;
`;

const ContentWrapper = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	display: grid;
	height: 100%;
	width: 100%;
	place-items: center;
	overflow-y: auto;
	padding: var(--space-xs);
	text-align: center;
	backface-visibility: hidden;
	overflow-x: auto;
`;
const FrontContentWrapper = styled(ContentWrapper)``;
const BackContentWrapper = styled(ContentWrapper)``;

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
		color: var(--color-fg);
		max-width: 22rem;
	}

	/* Inline Code */
	code {
		border-radius: 0.375rem;
		background-color: var(--color-bg);
		padding: 0.125rem 0.375rem;
		font-weight: var(--weight-regular);
		color: var(--color-gray-800);

		&::before,
		&::after {
			content: none;
		}

		.dark & {
			background-color: var(--color-gray-750);
			color: var(--color-gray-100);
		}
	}

	/* Code Blocks (Pre) */
	pre {
		min-width: 100%;
		max-width: 22rem;
		background-color: var(--color-bg);
		padding: var(--space-md);
		text-align: left;
		scrollbar-color: var(--color-gray-300) var(--color-bg);
		html.dark & {
			scrollbar-color: var(--color-gray-700) var(--color-bg);
		}

		/* Nested code inside pre blocks */
		code {
			background-color: var(--color-bg);
			padding: 0;
			color: var(--color-gray-800);

			.dark & {
				background-color: var(--color-bg);
				color: var(--color-gray-300);
			}
		}
	}

	/* Lists */
	ol,
	ul {
		padding-left: var(--space-md);
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
	OuterCardWrapper,
	InnerCardWrapper,
	FrontContentWrapper,
	BackContentWrapper,
	Prose,
};
