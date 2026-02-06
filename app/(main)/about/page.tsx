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
			<section className="mb-12 flex flex-col gap-4">
				<h1 className="text-4xl font-medium dark:text-(--color-white)">
					About
				</h1>
				<p className="text-(--color-gray-600) dark:text-(--color-gray-300)">
					Reps is a clean, simple, and no-fluff spaced repetition app that
					supports syntax highlighting. Using{" "}
					<a
						className="text-(--color-primary) underline hover:no-underline"
						href="https://www.markdownguide.org/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Markdown
					</a>
					, you can write code lines or blocks that are color-coded within your
					flashcards. This helps to write questions that involve code, which are
					not available out of the box in other spaced repetition apps.
				</p>
			</section>
			<section className="mb-12 flex flex-col gap-4">
				<h1 className="text-4xl font-medium dark:text-(--color-white)">
					Why Build This?
				</h1>
				<p className="text-(--color-gray-600) dark:text-(--color-gray-300)">
					This app was built as a replacement for a widely-known spaced
					repetition app that I previously used,{" "}
					<a
						className="text-(--color-primary) underline hover:no-underline"
						href="https://apps.ankiweb.net/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Anki
					</a>
					. I primarily used Anki to practice retaining information on
					programming fundamentals, but I had a few pain points with it:
				</p>

				<p className="text-(--color-gray-600) dark:text-(--color-gray-300)">
					<span className="text-(--color-primary)">[1]</span> The UI is not to
					my liking. <span className="text-(--color-primary)">[2]</span> It is
					not convenient to type code lines or blocks inside flashcards, you
					have to use the{" "}
					<code className="rounded-lg bg-(--color-gray-800) px-1.5 py-0.5 text-sm text-(--color-white) dark:text-(--color-gray-300)">
						code
					</code>{" "}
					tag. <span className="text-(--color-primary)">[3]</span> I only want
					to use simple features, but Anki comes with way too much of them.
				</p>
				<p className="text-(--color-gray-600) dark:text-(--color-gray-300)">
					And so, Reps was built. This app was not built for a wider audience in
					mind, but more so a personal app to solve the problems I&apos;ve
					mentioned prior. It also serves as an opportunity to learn new
					technologies I haven&apos;t dabbled with before. I intend to use this
					app daily as a replacement for Anki.
				</p>
			</section>
		</>
	);
}
