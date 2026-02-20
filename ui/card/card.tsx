"use client";

import React from "react";
import Markdown from "react-markdown";
import { motion } from "motion/react";
import rehypeHighlight from "rehype-highlight";
import styled from "styled-components";

export default function Card({ front, back }: { front: string; back: string }) {
	const [isFlipped, setIsFlipped] = React.useState(true);

	return (
		<OuterCardWrapper
			transition={{ duration: 0.5 }}
			animate={{ rotateX: isFlipped ? 0 : 180 }}
			onClick={() => setIsFlipped((prev) => !prev)}
		>
			<InnerCardWrapper
				transition={{ duration: 0.5 }}
				animate={{ rotateX: isFlipped ? 0 : 180 }}
			>
				<FrontContentWrapper
					transition={{ duration: 0.5 }}
					animate={{ rotateX: isFlipped ? 0 : 180 }}
				>
					<Prose>
						<Markdown rehypePlugins={[rehypeHighlight]}>{front}</Markdown>
					</Prose>
				</FrontContentWrapper>
				<BackContentWrapper
					initial={{ rotateX: 180 }}
					transition={{ duration: 0.5 }}
					animate={{ rotateX: isFlipped ? 180 : 0 }}
				>
					<Prose>
						<Markdown rehypePlugins={[rehypeHighlight]}>{back}</Markdown>
					</Prose>
				</BackContentWrapper>
			</InnerCardWrapper>
		</OuterCardWrapper>
	);
}

const OuterCardWrapper = styled(motion.div)`
	padding: 1rem;
	width: 100%;
	max-width: 26rem;
	min-height: 12.5rem;
	display: flex;
	flex-direction: column;
	background-color: var(--color-gray-light);
	border-radius: 0.5rem;
	cursor: pointer;
	overflow-y: auto;

	html.dark & {
		background-color: var(--color-gray-800);
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
	padding: 0.5rem;
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
	gap: 1rem;

	/* Headings */
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0;
		color: var(--color-gray-600);

		.dark & {
			color: var(--color-gray-300);
		}
	}

	/* Paragraphs & Strong */
	p {
		margin: 0;
		color: var(--color-gray-600);
		max-width: 22rem;

		.dark & {
			color: var(--color-gray-300);
		}
	}

	strong {
		.dark & {
			color: var(--color-gray-300);
		}
	}

	/* Inline Code */
	code {
		border-radius: 0.375rem;
		background-color: var(--color-gray-100);
		padding: 0.125rem 0.375rem;
		font-weight: 400;
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
		background-color: var(--color-white);
		padding: 1rem;
		text-align: left;

		.dark & {
			background-color: var(--color-black);
		}

		/* Nested code inside pre blocks */
		code {
			background-color: var(--color-white);
			padding: 0;
			color: var(--color-gray-800);

			.dark & {
				background-color: var(--color-black);
				color: var(--color-gray-300);
			}
		}
	}

	/* Lists */
	ol,
	ul {
		margin-top: 0.5rem;
		text-align: left;
		color: var(--color-gray-600);

		&::marker {
			color: var(--color-gray-600);
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
