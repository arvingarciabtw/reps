"use client";

import CardInputs from "@/ui/card/card-inputs";
import { useState } from "react";

export default function Demo() {
	const [frontValue, setFrontValue] = useState(`\`\`\`javascript
console.log(typeof + "21");
\`\`\``);
	const [backValue, setBackValue] = useState("number");

	return (
		<section className="mt-12 text-(--color-gray-600)">
			<CardInputs
				front={{
					value: frontValue,
					setter: setFrontValue,
				}}
				back={{
					value: backValue,
					setter: setBackValue,
				}}
			/>
		</section>
	);
}
