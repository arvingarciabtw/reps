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
		<div className="my-auto">
			<div className="mb-4">
				<h1 className="mb-4 w-full text-6xl font-semibold sm:max-w-xl dark:text-(--color-white)">
					Spaced repetition, for <span>coders.</span>
				</h1>
				<p className="mb-6 max-w-lg text-(--color-gray-600) dark:text-(--color-gray-300)">
					Reps is a spaced repetition app built for programmers who want a
					cleaner UI, native syntax highlighting, and an algorithm that moves
					through cards faster. No plugins, no config, no bloat.
				</p>
				<div className="mb-8">
					<Link href="/sign-in">
						<button className="ease cursor-pointer rounded-2xl bg-(--color-primary) px-5 py-2 font-medium text-(--color-bg) transition duration-300 hover:opacity-75">
							Sign in
						</button>
					</Link>
					<Link href="/overview">
						<button className="ease cursor-pointer rounded-2xl bg-transparent px-5 py-2 font-normal text-(--color-white) transition duration-300 hover:opacity-75">
							Learn more
						</button>
					</Link>
				</div>
				<Demo />
			</div>
		</div>
	);
}
