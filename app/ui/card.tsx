"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/night-owl.css";

export default function Card({ front, back }: { front: string; back: string }) {
	const [isFlipped, setIsFlipped] = useState(true);

	function handleClick() {
		setIsFlipped((prev) => !prev);
	}

	return (
		<motion.div
			className="relative flex h-full min-h-50 w-full max-w-104 flex-1 cursor-pointer flex-col overflow-y-auto rounded-lg bg-(--color-gray-800) p-4 sm:flex-1"
			transition={{ duration: 0.5 }}
			animate={{ rotateX: isFlipped ? 0 : 180 }}
			onClick={handleClick}
		>
			<motion.div
				className="relative flex-1"
				transition={{ duration: 0.5 }}
				animate={{ rotateX: isFlipped ? 0 : 180 }}
			>
				{/* Front */}
				<motion.div
					className="absolute top-0 left-0 grid h-full w-full place-items-center overflow-y-auto p-2 backface-hidden"
					transition={{ duration: 0.5 }}
					animate={{ rotateX: isFlipped ? 0 : 180 }}
				>
					<div className="prose prose-p:m-0 prose-p:text-(--color-gray-300) prose-code:rounded-md prose-code:bg-(--color-gray-700) prose-code:px-2 prose-code:py-1 prose-code:font-normal prose-code:text-(--color-gray-100) prose-code:before:content-none prose-code:after:content-none prose-pre:m-0 prose-pre:bg-(--color-gray-800) prose-pre:px-0">
						<Markdown rehypePlugins={[rehypeHighlight]}>{front}</Markdown>
					</div>
				</motion.div>

				{/* Back */}
				<motion.div
					className="absolute top-0 left-0 grid h-full w-full place-items-center overflow-y-auto p-2 backface-hidden"
					initial={{ rotateX: 180 }}
					transition={{ duration: 0.5 }}
					animate={{ rotateX: isFlipped ? 180 : 0 }}
				>
					<div className="prose prose-p:m-0 prose-p:text-2xl prose-p:text-(--color-gray-300) prose-code:rounded-md prose-code:bg-[#011627] prose-code:px-2 prose-code:py-1 prose-code:text-xl prose-code:font-normal prose-code:text-(--color-gray-100) prose-code:before:content-none prose-code:after:content-none prose-pre:m-0 prose-pre:bg-(--color-gray-800) prose-pre:px-0">
						<Markdown rehypePlugins={[rehypeHighlight]}>{back}</Markdown>
					</div>
				</motion.div>
			</motion.div>
		</motion.div>
	);
}
