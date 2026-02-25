import styled from "styled-components";

export default function DeckErrors({
	state,
}: {
	state: {
		errors?: {
			title?: string[];
			id?: string[];
			deckId?: string[];
		};
		message?: string | null;
	};
}) {
	return (
		<>
			{state.errors?.title && <Error>{state.errors.title[0]}</Error>}
			{state.message && <Error>{state.message}</Error>}
		</>
	);
}

const Error = styled.p`
	color: red;
`;
