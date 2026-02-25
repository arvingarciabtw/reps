import styled from "styled-components";


const FooterWrapper = styled.footer`
	padding: 1.5rem;
	margin: auto;
	color: var(--color-gray-800);

	html.dark & {
		color: var(--color-gray-300);
	}
`;

const FooterContent = styled.p``;

const Developer = styled.a`
	text-decoration: underline;
  color: var(--color-black);

	&:hover {
		text-decoration: none;
	}

	html.dark & {
    color: var(--color-white);
	}
`;

export {
  FooterWrapper,
  FooterContent,
  Developer
}
