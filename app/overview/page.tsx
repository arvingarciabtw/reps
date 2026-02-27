import Demo from "@/components/Demo";
import styled from "styled-components";

export default function About() {
	return (
		<>
			<Content />
		</>
	);
}

function Content() {
	return (
		<>
			<Section>
				<Title>Overview</Title>
				<Text>
					Reps is a spaced repetition app built for programmers who want a
					cleaner UI, native syntax highlighting, and an algorithm that moves
					through cards faster. Using{" "}
					<ExternalLink
						href="https://www.markdownguide.org/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Markdown
					</ExternalLink>
					, you can write code blocks that are color-coded. With a simple
					exponential algorithm, you can review your flashcards much quicker.
				</Text>
			</Section>

			<Section>
				<Title>Why build this?</Title>
				<Text>
					This app was built as a replacement for a widely-known spaced
					repetition app that I previously used,{" "}
					<ExternalLink
						href="https://apps.ankiweb.net/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Anki
					</ExternalLink>
					. I primarily used Anki to practice retaining information on
					programming fundamentals, but I had a few pain points with it:
				</Text>
				<List>
					<ListItem>The UI is not to my liking.</ListItem>
					<ListItem $maxWidth="42rem">
						{" "}
						It is not convenient to type code inside flashcards since you have
						to use the <InlineCode>code</InlineCode> tag. It also doesn&apos;t
						come with syntax highlighting.
					</ListItem>
					<ListItem $maxWidth="48rem">
						{" "}
						Anki utilizes a much more complex algorithm for determining when to
						show flashcards, which involves cards often being repeated in one
						session. I want to go through my cards quicker.
					</ListItem>
				</List>

				<Text>
					And so, Reps was built. This app was not built for a wider audience in
					mind, but more so a personal app to solve the problems I&apos;ve
					mentioned prior. It also serves as an opportunity to learn new
					technologies I haven&apos;t dabbled with before. I intend to use this
					app daily as a replacement for Anki.
				</Text>
			</Section>

			<Section>
				<Title>The algorithm</Title>
				<Text>How cards are shown is surprisingly simple!</Text>
				<Text>
					If you mark a card correctly, the number of days until it gets shown
					again gets doubled. This keeps going, and it caps at 32 days. If you
					mark a card incorrectly, the number of days until it gets shown is
					reset to 1.
				</Text>
				<Text>
					This makes it so that it&apos;s much easier to get through your cards
					quicker, especially if you&apos;re at a point where you have a lot of
					decks, that have a lot of cards. I much prefer this frequency, since I
					expend less time for one review session.
				</Text>
			</Section>

			<Section>
				<Title>User guide</Title>
				<Text>
					If you&apos;re not familiar with Markdown, I suggest you start by
					learning the basics, from a resource like this{" "}
					<ExternalLink
						href="https://www.markdownguide.org/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Markdown guide
					</ExternalLink>{" "}
					or something similar.
				</Text>
				<Text>
					To add syntax highlighting, you need to specify the programming
					language after the first three backticks, when creating a code block.
					Try changing the JavaScript code below to Python code, and change{" "}
					<InlineCode>javascript</InlineCode> to <InlineCode>python</InlineCode>{" "}
					to correctly apply syntax higlighting:
				</Text>
				<Demo />
				<Text style={{ marginTop: "1rem" }}>
					Here is the{" "}
					<ExternalLink
						href="https://highlightjs.readthedocs.io/en/latest/supported-languages.html"
						target="_blank"
						rel="noopener noreferrer"
					>
						list
					</ExternalLink>{" "}
					of supported languages. Languages that require a package are not
					supported (yet!).
				</Text>
			</Section>
		</>
	);
}

const Section = styled.section`
	margin-bottom: var(--space-3xl);
	display: flex;
	flex-direction: column;
	gap: var(--space-md);
`;

const Title = styled.h1`
	font-size: var(--font-2xl);
	font-weight: var(--weight-bold);
	color: var(--color-fg);
`;

const Text = styled.p`
	color: var(--color-gray-700);

	html.dark & {
		color: var(--color-gray-300);
	}
`;

const ExternalLink = styled.a`
	color: var(--color-fg);
	text-decoration: underline;

	&:hover {
		text-decoration: none;
	}
`;

const List = styled.ol`
	padding-left: 0;
	margin-left: var(--space-md);
	display: flex;
	flex-direction: column;
	gap: var(--space-2xs);
	color: var(--color-gray-700);

	@media (min-width: 640px) {
		margin-left: var(--space-lg);
	}

	html.dark & {
		color: var(--color-gray-300);
	}
`;

const ListItem = styled.li<{ $maxWidth?: string }>`
	${(props) => props.$maxWidth && `max-width: ${props.$maxWidth};`}

	span {
		color: var(--color-fg);
	}
`;

const InlineCode = styled.code`
	border-radius: var(--radius-xs);
	background-color: var(--color-gray-150);
	padding: 0.125rem 0.375rem;
	font-size: var(--font-sm);
	color: var(--color-fg);

	html.dark & {
		background-color: var(--color-gray-800);
	}
`;
