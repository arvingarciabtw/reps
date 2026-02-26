import styled from "styled-components";

const SearchWrapper = styled.form`
	margin-bottom: 2rem;
	width: 100%;
	display: flex;
	gap: 1rem;
`;

const SearchInput = styled.input`
	padding: 0 1rem;
	flex: 1;
	background-color: var(--color-gray-light);
	color: var(--color-black);
	border: none;
	border-radius: 1rem;

	&:focus {
		outline: 1px solid var(--color-gray-200);
	}

	html.dark & {
		background-color: var(--color-gray-800);
		color: var(--color-gray-300);
	}
	html.dark &:focus {
		outline-color: var(--color-gray-600);
	}
`;

export { SearchWrapper, SearchInput };
