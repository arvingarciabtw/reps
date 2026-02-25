import styled from "styled-components";
import Link from "next/link";

const PageWrapper = styled.div`
	margin-left: auto;
	margin-right: auto;
	margin-top: auto;
	margin-bottom: auto;
	display: flex;
	width: 100%;
	flex-direction: column;
	text-align: center;
	color: var(--color-gray-600);

	html.dark & {
		color: var(--color-gray-300);
	}
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

const Description = styled.p`
	max-width: 30rem;
	align-self: center;
`;

const PrimaryLink = styled(Link)`
	color: var(--color-black);
	text-decoration: underline;

	&:hover {
		text-decoration: none;
	}

	html.dark & {
		color: var(--color-white);
	}
`;

const ButtonGroup = styled.div`
	margin-top: 1rem;
	margin-bottom: 1.5rem;
	display: flex;
	align-items: center;
	gap: 1rem;
	align-self: center;
`;

const ActionButton = styled.button`
	display: flex;
	cursor: pointer;
	align-items: center;
	gap: 0.5rem;
	border-radius: 1rem;
	border: 1px solid var(--color-gray-200);
	background-color: transparent;
	padding: 0.5rem 1.25rem;
	color: var(--color-gray-600);
	transition: all 0.3s ease;

	&:hover {
		background-color: #f3f4f6;
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}

	html.dark & {
		border-color: var(--color-gray-700);
		background-color: var(--color-gray-800);
		color: var(--color-gray-300);

		&:hover {
			background-color: var(--color-gray-800);
			color: var(--color-primary);
		}
	}
`;

export {
	PageWrapper,
	Form,
	Description,
	PrimaryLink,
	ButtonGroup,
	ActionButton,
};
