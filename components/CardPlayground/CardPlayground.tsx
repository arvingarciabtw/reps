"use client";

import React from "react";
import { Dispatch, SetStateAction } from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Maximize from "@/components/Maximize";
import { RefreshCw } from "react-feather";
import {
	CardPlaygroundWrapper,
	CardInputWrapper,
	CardOutputWrapper,
	CardTopWrapper,
	CardInputHeading,
	CardOutputHeading,
	TextArea,
} from "@/components/CardPlayground/CardPlayground.style";

export default function CardInputs({
	front,
	back,
}: {
	front: {
		value: string;
		setter: Dispatch<SetStateAction<string>>;
	};
	back: {
		value: string;
		setter: Dispatch<SetStateAction<string>>;
	};
}) {
	return (
		<CardPlaygroundWrapper>
			<CardInput front={front} back={back} />
			<CardOutput front={front.value} back={back.value} />
		</CardPlaygroundWrapper>
	);
}

function CardInput({
	front,
	back,
}: {
	front: {
		value: string;
		setter: Dispatch<SetStateAction<string>>;
	};
	back: {
		value: string;
		setter: Dispatch<SetStateAction<string>>;
	};
}) {
	const [isFront, setIsFront] = React.useState(true);

	function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
		if (isFront) {
			front.setter(e.target.value);
		} else {
			back.setter(e.target.value);
		}
	}

	function toggleCardInput() {
		if (isFront) {
			setIsFront(false);
		} else {
			setIsFront(true);
		}
	}

	function handleTab(e: React.KeyboardEvent<HTMLTextAreaElement>) {
		if (e.key === "Tab") {
			e.preventDefault();
			const target = e.currentTarget;
			const start = target.selectionStart;
			const end = target.selectionEnd;
			const newValue =
				target.value.substring(0, start) + "  " + target.value.substring(end);

			const setter = isFront ? front.setter : back.setter;
			setter(newValue);

			requestAnimationFrame(() => {
				target.selectionStart = start + 2;
				target.selectionEnd = start + 2;
			});
		}
	}

	return (
		<CardInputWrapper>
			<CardTopWrapper>
				<CardInputHeading htmlFor="cardInput">
					{isFront ? "Front" : "Back"}
				</CardInputHeading>
				<Button variant="icon" type="button" onClick={toggleCardInput}>
					<RefreshCw size={16} />
				</Button>
			</CardTopWrapper>
			<TextArea
				onKeyDown={handleTab}
				required
				name="cardInput"
				id="cardInput"
				spellCheck="false"
				value={isFront ? front.value : back.value}
				onChange={handleChange}
			/>
		</CardInputWrapper>
	);
}

function CardOutput({ front, back }: { front: string; back: string }) {
	return (
		<CardOutputWrapper>
			<CardTopWrapper>
				<CardOutputHeading>Output</CardOutputHeading>
				<Maximize front={front} back={back} />
			</CardTopWrapper>
			<Card front={front} back={back} />
		</CardOutputWrapper>
	);
}
