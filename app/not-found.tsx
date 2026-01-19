import Link from "next/link";

export default function NotFound() {
	return (
		<main className="grid h-svh place-items-center">
			<div className="flex flex-col items-center gap-1">
				<h1 className="text-6xl font-bold">404</h1>
				<p className="text-(--color-gray-1)">Oops! Page not found.</p>
				<button className="ease mt-4 cursor-pointer rounded-2xl bg-(--color-primary) px-5 py-2 font-medium text-(--color-bg) transition duration-300 hover:opacity-75">
					<Link href="/">Go to home</Link>
				</button>
			</div>
		</main>
	);
}
