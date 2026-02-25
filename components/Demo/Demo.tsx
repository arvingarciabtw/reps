"use client";

import { DEMO_FRONT, DEMO_BACK } from "@/lib/constants/card-inputs";
import React from "react";
import CardPlayground from "@/components/CardPlayground";
import { DemoWrapper } from "@/components/Demo/Demo.style";

export default function Demo() {
	const [frontValue, setFrontValue] = React.useState(DEMO_FRONT);
	const [backValue, setBackValue] = React.useState(DEMO_BACK);

	return (
		<DemoWrapper>
			<CardPlayground
				front={{
					value: frontValue,
					setter: setFrontValue,
				}}
				back={{
					value: backValue,
					setter: setBackValue,
				}}
			/>
		</DemoWrapper>
	);
}
