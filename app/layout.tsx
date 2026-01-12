import type { Metadata } from "next";
import { Atkinson_Hyperlegible_Next } from "next/font/google";
import "./globals.css";

const atkinsonHyperlegibleNext = Atkinson_Hyperlegible_Next({
  variable: "--font-atkinson-hyperlegible-next",
  subsets: ["latin"],
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
    <html lang="en">
      <body className={`${atkinsonHyperlegibleNext.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
