"use client";

import React from "react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import { motion } from "motion/react";
import styled from "styled-components";
import { Prose } from "@/ui/card/card.style";

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
