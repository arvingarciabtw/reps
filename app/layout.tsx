import type { Metadata } from "next";
import {
	Atkinson_Hyperlegible_Next,
	Fira_Code,
	Fira_Sans,
} from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";
import { LIGHT_COLORS, DARK_COLORS } from "@/lib/constants/colors";

const atkinsonHyperlegibleNext = Atkinson_Hyperlegible_Next({
	variable: "--font-atkinson-hyperlegible-next",
	subsets: ["latin"],
	fallback: ["Arial", "sans-serif"],
});

const firaCode = Fira_Code({
	variable: "--font-fira-code",
	subsets: ["latin"],
	fallback: ["Arial", "sans-serif"],
});

const firaSans = Fira_Sans({
	weight: "700",
	variable: "--font-fira-sans",
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
	const savedTheme = (await cookies()).get("color-theme");
	const theme = savedTheme?.value || "light";

	const themeColors = (
		theme === "light" ? LIGHT_COLORS : DARK_COLORS
	) as React.CSSProperties;

	return (
		<html
			lang="en"
			className={`${atkinsonHyperlegibleNext.variable} ${firaCode.variable} ${firaSans.variable} antialiased ${theme === "dark" && "dark"}`}
			data-color-theme={theme}
			style={themeColors}
		>
			<body className="flex min-h-dvh flex-col bg-(--color-white) dark:bg-(--color-black)">
				{children}{" "}
			</body>
		</html>
	);
}
