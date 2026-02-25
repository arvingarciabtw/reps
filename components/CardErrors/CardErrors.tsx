import styled from "styled-components";

export default function CardErrors({
	state,
}: {
	state: {
		errors?: {
			front?: string[];
			back?: string[];
			id?: string[];
			deckId?: string[];
		};
		message?: string | null;
	};
}) {
	return (
		<>
			{state.errors?.front && <Error>{state.errors.front[0]}</Error>}
			{state.errors?.back && <Error>{state.errors.back[0]}</Error>}
			{state.message && <Error>{state.message}</Error>}
		</>
	);
}

const Error = styled.p`
	color: red;
`;
