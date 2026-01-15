import type { Metadata } from "next";
import {
	Atkinson_Hyperlegible_Next,
	Atkinson_Hyperlegible_Mono,
	Zalando_Sans_Expanded,
} from "next/font/google";
import "./globals.css";

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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${atkinsonHyperlegibleNext.variable} ${atkinsonHyperlegibleMono.variable} ${zalandoSansExpanded.variable} antialiased`}
		>
			<body>{children}</body>
		</html>
	);
}
