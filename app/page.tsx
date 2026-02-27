import Link from "next/link";
import Demo from "@/components/Demo";
import Button from "@/components/Button";
import { ArrowRight } from "react-feather";
import { getSession } from "@/utils/session";
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
	const session = await getSession();

	if (session) redirect("/dashboard");

	return (
		<OuterWrapper>
			<InnerWrapper>
				<Heading>
					Spaced repetition, for <span>coders.</span>
				</Heading>
				<Description>
					Reps is a spaced repetition app built for programmers who want a
					cleaner UI, native syntax highlighting, and an algorithm that moves
					through cards faster. No plugins, no config, no bloat.
				</Description>
				<ButtonGroup>
					<Link href="/auth">
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
	margin-bottom: var(--space-md);
`;

const Heading = styled.h1`
	margin-bottom: var(--space-md);
	width: 100%;
	font-size: var(--font-4xl);
	font-weight: 700;
	line-height: 1.125;
	color: var(--color-fg);

	@media (min-width: 640px) {
		max-width: 36rem;
	}
`;

const Description = styled.p`
	margin-bottom: var(--space-lg);
	max-width: 32rem;
	color: var(--color-gray-700);

	html.dark & {
		color: var(--color-gray-300);
	}
`;

const ButtonGroup = styled.div`
	margin-bottom: var(--space-lg);
	display: flex;
	gap: var(--space-xs);

	& a {
		text-decoration: none;
		color: var(--color-fg);
	}
`;
