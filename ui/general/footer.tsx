import styled from "styled-components";

export default function Footer() {
	return (
		<FooterWrapper>
			<FooterContent>
				Made by{" "}
				<Developer
					href="https://github.com/arvingarciabtw"
					target="_blank"
					rel="noopener noreferrer"
				>
					@arvingarciabtw
				</Developer>
			</FooterContent>
		</FooterWrapper>
	);
}

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
