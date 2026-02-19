import Demo from "@/ui/general/demo";

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
				<h1 className="text-[2rem] font-bold dark:text-(--color-primary)">
					Overview
				</h1>
				<p className="text-(--color-gray-600) dark:text-(--color-gray-300)">
					Reps is a spaced repetition app built for programmers who want a
					cleaner UI, native syntax highlighting, and an algorithm that moves
					through cards faster. Using{" "}
					<a
						className="text-(--color-black) underline hover:no-underline dark:text-(--color-white)"
						href="https://www.markdownguide.org/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Markdown
					</a>
					, you can write code blocks that are color-coded. With a simple
					exponential algorithm, you can review your flashcards much quicker.
				</p>
			</section>
			<section className="mb-12 flex flex-col gap-4">
				<h1 className="text-[2rem] font-bold dark:text-(--color-primary)">
					Why build this?
				</h1>
				<p className="text-(--color-gray-600) dark:text-(--color-gray-300)">
					This app was built as a replacement for a widely-known spaced
					repetition app that I previously used,{" "}
					<a
						className="text-(--color-black) underline hover:no-underline dark:text-(--color-white)"
						href="https://apps.ankiweb.net/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Anki
					</a>
					. I primarily used Anki to practice retaining information on
					programming fundamentals, but I had a few pain points with it:
				</p>
				<ol className="ml-0 flex flex-col gap-1 text-(--color-gray-600) sm:ml-6 dark:text-(--color-gray-300)">
					<li>
						<span className="text-(--color-black) dark:text-(--color-white)">
							[1]
						</span>{" "}
						The UI is not to my liking.
					</li>
					<li className="max-w-2xl">
						<span className="text-(--color-black) dark:text-(--color-white)">
							[2]
						</span>{" "}
						It is not convenient to type code inside flashcards since you have
						to use the{" "}
						<code className="rounded-lg bg-(--color-gray-100) px-1.5 py-0.5 text-sm text-(--color-gray-800) dark:bg-(--color-gray-700) dark:text-(--color-gray-100)">
							code
						</code>{" "}
						tag. It also doesn&apos;t come with syntax highlighting.
					</li>
					<li className="max-w-3xl">
						<span className="text-(--color-black) dark:text-(--color-white)">
							[3]
						</span>{" "}
						Anki utilizes a much more complex algorithm for determining when to
						show flashcards, which involves cards often being repeated in one
						session. I want to go through my cards quicker.
					</li>
				</ol>

				<p className="text-(--color-gray-600) dark:text-(--color-gray-300)">
					And so, Reps was built. This app was not built for a wider audience in
					mind, but more so a personal app to solve the problems I&apos;ve
					mentioned prior. It also serves as an opportunity to learn new
					technologies I haven&apos;t dabbled with before. I intend to use this
					app daily as a replacement for Anki.
				</p>
			</section>
			<section className="mb-12 flex flex-col gap-4">
				<h1 className="text-[2rem] font-bold dark:text-(--color-primary)">
					The algorithm
				</h1>
				<p className="text-(--color-gray-600) dark:text-(--color-gray-300)">
					How cards are shown is surprisingly simple!
				</p>
				<p className="text-(--color-gray-600) dark:text-(--color-gray-300)">
					If you mark a card correctly, the number of days until it gets shown
					again gets doubled. This keeps going, and it caps at 32 days. If you
					mark a card incorrectly, the number of days until it gets shown is
					reset to 1.
				</p>
				<p className="text-(--color-gray-600) dark:text-(--color-gray-300)">
					This makes it so that it&apos;s much easier to get through your cards
					quicker, especially if you&apos;re at a point where you have a lot of
					decks, that have a lot of cards. I much prefer this frequency, since I
					expend less time for one review session.
				</p>
			</section>
			<section className="mb-12 flex flex-col gap-4">
				<h1 className="text-[2rem] font-bold dark:text-(--color-primary)">
					User guide
				</h1>
				<p className="text-(--color-gray-600) dark:text-(--color-gray-300)">
					If you&apos;re not familiar with Markdown, I suggest you start by
					learning the basics, from a resource like this{" "}
					<a
						className="text-(--color-black) underline hover:no-underline dark:text-(--color-white)"
						href="https://www.markdownguide.org/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Markdown guide
					</a>{" "}
					or something similar.
				</p>
				<p className="text-(--color-gray-600) dark:text-(--color-gray-300)">
					To add syntax highlighting, you need to specify the programming
					language after the first three backticks, when creating a code block.
					Try changing the JavaScript code below to Python code, and change{" "}
					<code className="rounded-lg bg-(--color-gray-100) px-1.5 py-0.5 text-sm text-(--color-gray-800) dark:bg-(--color-gray-700) dark:text-(--color-gray-100)">
						javascript
					</code>{" "}
					to{" "}
					<code className="rounded-lg bg-(--color-gray-100) px-1.5 py-0.5 text-sm text-(--color-gray-800) dark:bg-(--color-gray-700) dark:text-(--color-gray-100)">
						python
					</code>{" "}
					to correctly apply syntax higlighting:
				</p>
				<Demo />
				<p className="mt-4 text-(--color-gray-600) dark:text-(--color-gray-300)">
					Here is the{" "}
					<a
						className="text-(--color-black) underline hover:no-underline dark:text-(--color-white)"
						href="https://highlightjs.readthedocs.io/en/latest/supported-languages.html"
						target="_blank"
						rel="noopener noreferrer"
					>
						list
					</a>{" "}
					of supported languages. Languages that require a package are not
					supported (yet!).
				</p>
			</section>
		</>
	);
}
