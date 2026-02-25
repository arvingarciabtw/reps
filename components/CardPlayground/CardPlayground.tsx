import { Dispatch, SetStateAction } from "react";
import Card from "@/components/Card";
import {
	CardPlaygroundWrapper,
	CardInputsGroup,
	CardInputWrapper,
	CardOutputWrapper,
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
			<CardInputsGroup>
				<CardInput
					heading={"Front"}
					type={"front"}
					value={front.value}
					onChange={front.setter}
				/>
				<CardInput
					heading={"Back"}
					type={"back"}
					value={back.value}
					onChange={back.setter}
				/>
			</CardInputsGroup>
			<CardOutput front={front.value} back={back.value} />
		</CardPlaygroundWrapper>
	);
}

function CardInput({
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
		<CardInputWrapper>
			<CardInputHeading htmlFor={type}>{heading}</CardInputHeading>
			<TextArea
				required
				name={type}
				id={type}
				spellCheck="false"
				value={value}
				onChange={handleChange}
			/>
		</CardInputWrapper>
	);
}

function CardOutput({ front, back }: { front: string; back: string }) {
	return (
		<CardOutputWrapper>
			<CardOutputHeading>Output</CardOutputHeading>
			<Card front={front} back={back} />
		</CardOutputWrapper>
	);
}
