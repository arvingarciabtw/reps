import { Dispatch, SetStateAction } from "react";
import Card from "@/ui/card/card";
import {
	Container,
	InputGroup,
	StyledSection,
	OutputSection,
	Label,
	Heading,
	TextArea,
} from "@/ui/card/card.style";

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
		<Container>
			<InputGroup>
				<Input
					heading={"Front"}
					type={"front"}
					value={front.value}
					onChange={front.setter}
				/>
				<Input
					heading={"Back"}
					type={"back"}
					value={back.value}
					onChange={back.setter}
				/>
			</InputGroup>
			<Output front={front.value} back={back.value} />
		</Container>
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
		<StyledSection>
			<Label htmlFor={type}>{heading}</Label>
			<TextArea
				required
				name={type}
				id={type}
				spellCheck="false"
				value={value}
				onChange={handleChange}
			/>
		</StyledSection>
	);
}

function Output({ front, back }: { front: string; back: string }) {
	return (
		<OutputSection>
			<Heading>Output</Heading>
			<Card front={front} back={back} />
		</OutputSection>
	);
}
