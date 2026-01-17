import type { Metadata } from "next";

import "./globals.css";
import {
	Atkinson_Hyperlegible_Next,
	Atkinson_Hyperlegible_Mono,
	Zalando_Sans_Expanded,
} from "next/font/google";

import NavBar from "@/app/ui/navbar";
import Footer from "@/app/ui/footer";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const atkinsonHyperlegibleNext = Atkinson_Hyperlegible_Next({
	variable: "--font-atkinson-hyperlegible-next",
	subsets: ["latin"],
	fallback: ["Arial", "sans-serif"],
});

const atkinsonHyperlegibleMono = Atkinson_Hyperlegible_Mono({
	variable: "--font-atkinson-hyperlegible-mono",
	subsets: ["latin"],
	fallback: ["Arial", "sans-serif"],
});

const zalandoSansExpanded = Zalando_Sans_Expanded({
	variable: "--font-zalando-sans-expanded",
	subsets: ["latin"],
	fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
	title: "Reps",
	description: "A spaced repetition app that supports code syntax highlighting",
	metadataBase: new URL("https://reps.arvingarcia.com"),
	applicationName: "Reps",
	keywords: ["Next.js", "React", "JavaScript", "Spaced Repetition"],
	authors: [{ name: "Arvin Garcia", url: "https://arvingarcia.com" }],
	creator: "Arvin Garcia",
	publisher: "Arvin Garcia",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	return (
		<html
			lang="en"
			className={`${atkinsonHyperlegibleNext.variable} ${atkinsonHyperlegibleMono.variable} ${zalandoSansExpanded.variable} antialiased`}
		>
			<body>
				<NavBar session={session} />
				{children}
				<Footer />
			</body>
		</html>
	);
}
