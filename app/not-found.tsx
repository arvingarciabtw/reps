import styled from "styled-components";
import Link from "next/link";
import Button from "@/components/Button";

export default function NotFound() {
	return (
		<Content>
			<Title>404</Title>
			<Message>Oops! Page not found.</Message>
			<Link href="/">
				<Button variant="regular">Go to home</Button>
			</Link>
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
	font-size: 3.75rem;
	font-weight: 700;
`;

const Message = styled.p`
	margin: -0.75rem 0 1rem;
	color: var(--color-gray-1);
`;
