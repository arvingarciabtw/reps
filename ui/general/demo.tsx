"use client";

import CardInputs from "@/ui/card/card-inputs";
import { DEMO_FRONT } from "@/lib/constants/card-inputs";
import { useState } from "react";

export default function Demo() {
	const [frontValue, setFrontValue] = useState(DEMO_FRONT);
	const [backValue, setBackValue] = useState("number");

	return (
		<section className="mt-4 text-(--color-gray-600)">
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
