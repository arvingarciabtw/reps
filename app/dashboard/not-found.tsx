import styled from "styled-components";
import Link from "next/link";

export default function NotFound() {
	return (
		<Main>
			<Content>
				<Title>404</Title>
				<Message>Oops! Page not found.</Message>
				<DashboardButton>
					<Link href="/dashboard">Go to dashboard</Link>
				</DashboardButton>
			</Content>
		</Main>
	);
}

const Main = styled.main`
	display: grid;
	height: 100svh;
	place-items: center;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.25rem;
`;

const Title = styled.h1`
	font-size: 3.75rem; /* text-6xl */
	font-weight: 700;
`;

const Message = styled.p`
	color: var(--color-gray-1);
`;

const DashboardButton = styled.button`
	margin-top: 1rem;
	cursor: pointer;
	border-radius: 1rem; /* rounded-2xl */
	border: none;
	background-color: var(--color-primary);
	padding: 0.5rem 1.25rem; /* py-2 px-5 */
	font-weight: 500;
	color: var(--color-bg);
	transition: opacity 0.3s ease;

	&:hover {
		opacity: 0.75;
	}

	a {
		color: inherit;
		text-decoration: none;
	}
`;
