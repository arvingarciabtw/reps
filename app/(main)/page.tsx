import styled from "styled-components";
import Link from "next/link";
import Demo from "@/ui/general/demo";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function App() {
	return (
		<>
			<LandingSection />
		</>
	);
}

async function LandingSection() {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (session) redirect("/dashboard");

	return (
		<Container>
			<ContentWrapper>
				<Title>
					Spaced repetition, for <span>coders.</span>
				</Title>
				<Description>
					Reps is a spaced repetition app built for programmers who want a
					cleaner UI, native syntax highlighting, and an algorithm that moves
					through cards faster. No plugins, no config, no bloat.
				</Description>
				<ButtonGroup>
					<Link href="/sign-in">
						<PrimaryButton>Sign in</PrimaryButton>
					</Link>
					<Link href="/overview">
						<GhostButton>Learn more</GhostButton>
					</Link>
				</ButtonGroup>
				<Demo />
			</ContentWrapper>
		</Container>
	);
}

const Container = styled.div`
	margin-top: auto;
	margin-bottom: auto;
`;

const ContentWrapper = styled.div`
	margin-bottom: 1rem;
`;

const Title = styled.h1`
	margin-bottom: 1rem;
	width: 100%;
	font-size: 3.75rem; /* 6xl */
	font-weight: 800;
  line-height: 1.125;

	@media (min-width: 640px) {
		max-width: 36rem; /* sm:max-w-xl */
	}

	html.dark & {
		color: var(--color-white);
	}
`;

const Description = styled.p`
	margin-bottom: 1.5rem;
	max-width: 32rem; /* max-w-lg */
	color: var(--color-gray-600);

	html.dark & {
		color: var(--color-gray-300);
	}
`;

const ButtonGroup = styled.div`
	margin-bottom: 2rem;
	display: flex;
	gap: 0.5rem;

  & a { 
    text-decoration: none;
    color: var(--black);
  }
`;

const PrimaryButton = styled.button`
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
`;

const GhostButton = styled.button`
	cursor: pointer;
	border-radius: 1rem;
	background-color: transparent;
	padding: 0.5rem 1.25rem;
	font-weight: 400;
	color: var(--color-black);
	transition: opacity 0.3s ease;
	border: none;

	&:hover {
		opacity: 0.75;
	}

	html.dark & {
		color: var(--color-white);
	}
`;
