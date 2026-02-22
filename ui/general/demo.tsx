"use client";

import React from "react";
import CardInputs from "@/ui/card/card-inputs";
import styled from "styled-components";
import { DEMO_FRONT } from "@/lib/constants/card-inputs";

export default function Demo() {
	const [frontValue, setFrontValue] = React.useState(DEMO_FRONT);
	const [backValue, setBackValue] = React.useState("number");

	return (
		<DemoWrapper>
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
		</DemoWrapper>
	);
}

const DemoWrapper = styled.div`
	margin-top: 1rem;
	color: var(--color-gray-600);
`;
