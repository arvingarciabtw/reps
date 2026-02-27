import styled from "styled-components";

const FooterWrapper = styled.footer`
	padding: var(--space-lg);
	margin: auto;
	color: var(--color-gray-700);

	html.dark & {
		color: var(--color-gray-300);
	}
`;

const FooterContent = styled.p``;

const Developer = styled.a`
	text-decoration: underline;
	color: var(--color-fg);

	&:hover {
		text-decoration: none;
	}
`;

export { FooterWrapper, FooterContent, Developer };
