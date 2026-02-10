"use client";

import Card from "@/ui/card/card";
import { useState } from "react";

export default function Demo() {
	const [frontValue, setFrontValue] = useState(`\`\`\`javascript
console.log(typeof + "21");
\`\`\``);
	const [backValue, setBackValue] = useState("number");
	return (
		<div className="mt-8 flex flex-col gap-4 sm:flex-row">
			<div className="flex flex-col gap-4 sm:flex-1">
				<Input
					heading={"Front"}
					type={"front"}
					value={frontValue}
					onChange={setFrontValue}
				/>
				<Input
					heading={"Back"}
					type={"back"}
					value={backValue}
					onChange={setBackValue}
				/>
			</div>
			<section className="flex w-full flex-1 flex-col gap-2 self-stretch">
				<h1 className="self-start text-(--color-gray-600) dark:text-(--color-white)">
					Output
				</h1>
				<Card front={frontValue} back={backValue} />
			</section>
		</div>
	);
}

function Input({
	heading,
	type,
	value,
	onChange,
}: {
	heading: string;
	type: string;
	value: string;
	onChange: (value: string) => void;
}) {
	function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
		onChange(e.target.value);
	}

	return (
		<section className="flex flex-col gap-2 sm:flex-1">
			<label
				htmlFor={type}
				className="self-start text-(--color-gray-600) dark:text-(--color-white)"
			>
				{heading}
			</label>
			<textarea
				required
				spellCheck={false}
				name={type}
				id={type}
				draggable="false"
				className="min-h-50 w-full resize-none overflow-y-auto rounded-lg bg-(--color-gray-light) p-4 font-mono text-sm text-(--color-gray-800) focus:outline-1 focus:outline-(--color-gray-200) sm:min-h-25 dark:bg-(--color-gray-800) dark:text-(--color-gray-300) dark:focus:outline-(--color-gray-700)"
				value={value}
				onChange={handleChange}
			></textarea>
		</section>
	);
}
