import Link from "next/link";
import Demo from "@/components/Demo";
import Button from "@/components/Button";
import { ArrowRight } from "react-feather";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import styled from "styled-components";

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
		<OuterWrapper>
			<InnerWrapper>
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
						<Button variant="cta">Sign in</Button>
					</Link>
					<Link href="/overview">
						<Button variant="ghost">
							Learn more
							<ArrowRight size={18} />
						</Button>
					</Link>
				</ButtonGroup>
				<Demo />
			</InnerWrapper>
		</OuterWrapper>
	);
}

const OuterWrapper = styled.div`
	margin-top: auto;
	margin-bottom: auto;
`;

const InnerWrapper = styled.div`
	margin-bottom: 1rem;
`;

const Title = styled.h1`
	margin-bottom: 1rem;
	width: 100%;
	font-size: 3.75rem;
	font-weight: 700;
	line-height: 1.125;

	@media (min-width: 640px) {
		max-width: 36rem;
	}

	html.dark & {
		color: var(--color-white);
	}
`;

const Description = styled.p`
	margin-bottom: 1.5rem;
	max-width: 32rem;
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
