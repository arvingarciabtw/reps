import NavBar from "@/ui/general/navbar";
import Footer from "@/ui/general/footer";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { cookies } from "next/headers";

export default async function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	const savedTheme = (await cookies()).get("color-theme");
	const theme = savedTheme?.value || "light";

	return (
		<>
			<NavBar session={session} theme={theme} />
			<main className="relative mx-auto flex w-full max-w-4xl flex-1 flex-col p-6">
				{children}
			</main>
			<Footer />
		</>
	);
}
