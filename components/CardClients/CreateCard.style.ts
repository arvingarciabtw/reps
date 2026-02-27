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
	color: var(--color-gray-700);

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
	color: var(--color-fg);
	text-decoration: underline;

	&:hover {
		text-decoration: none;
	}
`;

const ButtonGroup = styled.div`
	margin-top: var(--space-md);
	margin-bottom: var(--space-3xl);
	display: flex;
	align-items: center;
	gap: var(--space-md);
	align-self: center;
`;

export { PageWrapper, Form, Description, PrimaryLink, ButtonGroup };
