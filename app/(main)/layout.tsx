import NavBar from "@/app/ui/navbar";
import Footer from "@/app/ui/footer";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	return (
		<>
			<NavBar session={session} />
			<main className="relative mx-auto flex w-full max-w-4xl flex-1 flex-col p-6">
				{children}
			</main>
			<Footer />
		</>
	);
}
