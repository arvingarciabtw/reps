import styled from "styled-components";

const SearchWrapper = styled.form`
	margin-bottom: var(--space-xl);
	width: 100%;
	display: flex;
	gap: var(--space-md);
`;

const SearchInput = styled.input`
	padding: 0 var(--space-md);
	flex: 1;
	background-color: var(--color-gray-150);
	color: var(--color-fg);
	border: none;
	border-radius: var(--radius-md);

	&:focus {
		outline: 1px solid var(--color-gray-200);
	}

	html.dark & {
		background-color: var(--color-gray-850);
		color: var(--color-fg);
	}
	html.dark &:focus {
		outline-color: var(--color-gray-700);
	}
`;

export { SearchWrapper, SearchInput };
