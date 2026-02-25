import styled from "styled-components"

const ThemeToggleWrapper = styled.button`
  padding: 0;
  background-color: transparent;
	color: var(--color-gray-800);
  border: 8px solid transparent;
  border-radius: 50%;
	cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;

	html.dark & {
		color: var(--color-gray-300);
	}

  &:hover {
    background-color: var(--color-gray-light);
    border-color: var(--color-gray-light);
  }

  html.dark &:hover {
    background-color: var(--color-gray-750);
    border-color: var(--color-gray-750);
  }
`;

export { ThemeToggleWrapper }
