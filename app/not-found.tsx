import styled from "styled-components";
import Link from "next/link";

export default function NotFound() {
	return (
		<Content>
			<Title>404</Title>
			<Message>Oops! Page not found.</Message>
			<HomeButton>
				<Link href="/">Go to home</Link>
			</HomeButton>
		</Content>
	);
}

const Content = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-self: center;
	justify-self: center;
	gap: 0.25rem;
	color: var(--color-black);

	html.dark & {
		color: var(--color-white);
	}
`;

const Title = styled.h1`
	font-size: 3.75rem; /* text-6xl */
	font-weight: 700;
`;

const Message = styled.p`
	color: var(--color-gray-1);
`;

const HomeButton = styled.button`
	margin-top: 1rem;
	cursor: pointer;
	border-radius: 1rem;
	background-color: var(--color-primary);
	padding: 0.5rem 1.25rem;
	font-weight: 500;
	color: var(--color-bg);
	transition: opacity 0.3s ease;
	border: none;

	&:hover {
		opacity: 0.75;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	html.dark & {
		color: var(--color-black);
	}
`;
