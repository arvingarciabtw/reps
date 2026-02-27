"use client";

import rehypeHighlight from "rehype-highlight";
import React from "react";
import Markdown from "react-markdown";
import {
	OuterCardWrapper,
	InnerCardWrapper,
	FrontContentWrapper,
	BackContentWrapper,
	Prose,
} from "@/components/Card/Card.style";

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
