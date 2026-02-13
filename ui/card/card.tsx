"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

export default function Card({ front, back }: { front: string; back: string }) {
	const [isFlipped, setIsFlipped] = useState(true);

	function handleClick() {
		setIsFlipped((prev) => !prev);
	}

	return (
		<motion.div
			className="relative flex h-full min-h-50 w-full max-w-104 flex-1 cursor-pointer flex-col rounded-lg bg-(--color-gray-light) p-4 sm:flex-1 dark:bg-(--color-gray-800)"
			style={{ transformStyle: "preserve-3d" }}
			transition={{ duration: 0.5 }}
			animate={{ rotateX: isFlipped ? 0 : 180 }}
			onClick={handleClick}
		>
			<div
				className="relative flex-1"
				style={{ transformStyle: "preserve-3d" }}
			>
				{/* Front */}
				<div
					className="absolute top-0 left-0 h-full w-full backface-hidden"
					style={{ backfaceVisibility: "hidden" }}
				>
					<div className="grid h-full w-full place-items-center overflow-y-auto p-2 text-center">
						<div className="prose w-full prose-p:m-0 prose-p:text-(--color-gray-600) dark:prose-p:text-(--color-gray-300) prose-code:rounded-md prose-code:bg-(--color-gray-100) prose-code:px-1.5 prose-code:py-0.5 prose-code:font-normal prose-code:text-(--color-gray-800) prose-code:before:content-none prose-code:after:content-none dark:prose-code:bg-(--color-gray-750) dark:prose-code:text-(--color-gray-100) prose-pre:mx-0 prose-pre:my-4 prose-pre:max-w-88 prose-pre:min-w-full prose-pre:bg-(--color-white) prose-pre:px-4 prose-pre:text-left dark:prose-pre:bg-(--color-black) [&_pre_code]:bg-(--color-white) [&_pre_code]:p-0 [&_pre_code]:text-(--color-gray-800) dark:[&_pre_code]:bg-(--color-black) dark:[&_pre_code]:text-(--color-gray-300)">
							<Markdown rehypePlugins={[rehypeHighlight]}>{front}</Markdown>
						</div>
					</div>
				</div>

				{/* Back */}
				<div
					className="absolute top-0 left-0 h-full w-full backface-hidden"
					style={{
						transform: "rotateX(180deg)",
						backfaceVisibility: "hidden",
					}}
				>
					<div className="grid h-full w-full place-items-center overflow-y-auto p-2 text-center">
						<div className="prose w-full prose-p:m-0 prose-p:text-(--color-gray-600) dark:prose-p:text-(--color-gray-300) prose-code:rounded-md prose-code:bg-(--color-gray-100) prose-code:px-1.5 prose-code:py-0.5 prose-code:font-normal prose-code:text-(--color-gray-800) prose-code:before:content-none prose-code:after:content-none dark:prose-code:bg-(--color-gray-750) dark:prose-code:text-(--color-gray-100) prose-pre:mx-0 prose-pre:my-4 prose-pre:max-w-88 prose-pre:min-w-full prose-pre:bg-(--color-white) prose-pre:px-4 prose-pre:text-left dark:prose-pre:bg-(--color-black) [&_pre_code]:bg-(--color-white) [&_pre_code]:p-0 [&_pre_code]:text-(--color-gray-800) dark:[&_pre_code]:bg-(--color-black) dark:[&_pre_code]:text-(--color-gray-300)">
							<Markdown rehypePlugins={[rehypeHighlight]}>{back}</Markdown>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
