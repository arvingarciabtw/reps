import NavBar from "@/app/ui/navbar";
import Footer from "@/app/ui/footer";
import Link from "next/link";

export default function App() {
	return (
		<>
			<NavBar />
			<LandingSection />
			<Footer />
		</>
	);
}

function LandingSection() {
	return (
		<main className="mx-auto grid w-full max-w-4xl flex-1 items-center p-6 font-sans text-(--color-fg)">
			<div className="mb-4">
				<h1 className="mb-4 w-full text-6xl font-semibold sm:max-w-xl">
					Spaced repetition, for <span>coders.</span>
				</h1>
				<p className="mb-6 max-w-lg text-(--color-gray-300)">
					Reps is a clean, simple, and no-fluff spaced repetition app that
					supports syntax highlighting. Write code examples with easily readable
					lines, to retain programming concepts in your brain.
				</p>
				<div>
					<Link href="/login">
						<button className="ease cursor-pointer rounded-2xl bg-(--color-primary) px-5 py-2 font-medium text-(--color-bg) transition duration-300 hover:opacity-75">
							Log in
						</button>
					</Link>
				</div>
			</div>
		</main>
	);
}
