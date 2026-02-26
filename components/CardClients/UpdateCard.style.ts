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
	margin-bottom: 3rem;
	display: flex;
	align-items: center;
	gap: 1rem;
	align-self: center;
`;

export { PageWrapper, Form, Description, PrimaryLink, ButtonGroup };
