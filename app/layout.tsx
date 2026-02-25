import "./globals.css";
import type { Metadata } from "next";
import {
	Atkinson_Hyperlegible_Next,
	Fira_Code,
	Fira_Sans,
} from "next/font/google";
import { cookies } from "next/headers";
import { LIGHT_COLORS, DARK_COLORS } from "@/lib/constants/colors";
import StyledComponentsRegistry from "@/lib/registry";
import HljsTheme from "@/components/HljsTheme";
import styled from "styled-components";

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
	weight: "600",
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
			<head>
				<link
					id="hljs-light"
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-light.min.css"
				/>
				<link
					id="hljs-dark"
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css"
				/>
			</head>
			<StyledComponentsRegistry>
				<StyledBody>
					<HljsTheme />
					{children}
				</StyledBody>
			</StyledComponentsRegistry>
		</html>
	);
}

const StyledBody = styled.body`
	display: flex;
	min-height: 100dvh;
	flex-direction: column;
	background-color: var(--color-white);

	html.dark & {
		background-color: var(--color-black);
	}
`;
