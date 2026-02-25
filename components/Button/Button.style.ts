import styled from "styled-components";

const ButtonWrapper = styled.button`
	padding: 0.5rem 1.25rem;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	border: 1px solid transparent;
	border-radius: 1rem;
	cursor: pointer;
	transition: all 0.3s ease;

	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}
`;

const CTA = styled(ButtonWrapper)`
	background-color: var(--color-primary);
	color: var(--color-black);
	border-color: var(--color-primary);
	font-weight: 500;

	&:hover {
		opacity: 0.75;
	}
`;

const Ghost = styled(ButtonWrapper)`
	background-color: transparent;
	color: var(--color-black);
	border: none;

	html.dark & {
		color: var(--color-white);
	}

	& svg {
		transition: transform 0.3s ease;
	}

	&:hover svg {
		transform: translateX(3px);
	}
`;

const Regular = styled(ButtonWrapper)`
	background-color: transparent;
	color: var(--color-gray-600);
	border-color: var(--color-gray-200);

	&:hover {
		background-color: var(--color-gray-light);
	}

	html.dark & {
		background-color: var(--color-gray-800);
		color: var(--color-gray-300);
		border-color: var(--color-gray-700);

		&:hover {
			background-color: var(--color-gray-750);
		}
	}
`;

const Danger = styled(ButtonWrapper)`
	background-color: #ef4444;
	color: var(--color-white);
	border-color: #ef4444;

	&:hover {
		opacity: 0.75;
	}
`;

const Icon = styled(ButtonWrapper)`
	padding: 0;
	background-color: transparent;
	color: var(--color-black);

	&:hover {
		opacity: 0.75;
	}

	html.dark & {
		color: var(--color-gray-300);
	}
`;

export { CTA, Ghost, Regular, Danger, Icon };
