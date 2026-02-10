import { Dispatch, SetStateAction } from "react";
import Card from "@/ui/card/card";

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
		<div className="flex flex-col gap-4 sm:flex-row">
			<div className="flex flex-col gap-4 sm:flex-1">
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
			</div>
			<Output front={front.value} back={back.value} />
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
				className="self-start text-(--color-gray-600) dark:text-(--color-gray-300)"
			>
				{heading}
			</label>
			<textarea
				required
				name={type}
				id={type}
				draggable="false"
				className="min-h-50 w-full resize-none overflow-y-auto rounded-lg bg-(--color-gray-light) p-4 font-mono text-sm text-(--color-gray-800) focus:outline-1 focus:outline-(--color-gray-100) sm:min-h-25 dark:bg-(--color-gray-800) dark:text-(--color-gray-300) dark:focus:outline-(--color-gray-700)"
				value={value}
				onChange={handleChange}
			></textarea>
		</section>
	);
}

function Output({ front, back }: { front: string; back: string }) {
	return (
		<section className="flex w-full flex-1 flex-col gap-2 self-stretch">
			<h1 className="self-start text-(--color-gray-600) dark:text-(--color-gray-300)">
				Output
			</h1>
			<Card front={front} back={back} />
		</section>
	);
}
