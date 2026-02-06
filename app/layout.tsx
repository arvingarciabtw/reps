import type { Metadata } from "next";
import {
	Atkinson_Hyperlegible_Next,
	Zalando_Sans_Expanded,
	Fira_Code,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/ui/theme-provider";

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
	return (
		<html
			suppressHydrationWarning
			lang="en"
			className={`${atkinsonHyperlegibleNext.variable} ${firaCode.variable} ${zalandoSansExpanded.variable} antialiased`}
		>
			<head>
				<script
					dangerouslySetInnerHTML={{
						__html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'system';
                const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
                document.documentElement.classList.add(isDark ? 'dark' : 'light');
              })();
            `,
					}}
				/>
			</head>
			<body className="flex min-h-dvh flex-col bg-(--color-white) dark:bg-(--color-black)">
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	);
}
