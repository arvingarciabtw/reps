import NavBar from "@/app/ui/navbar";
import Footer from "@/app/ui/footer";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (session) redirect("/dashboard");

	return (
		<>
			<NavBar session={session} />
			<main className="mx-auto grid w-full max-w-4xl flex-1 place-items-center p-6">
				{children}
			</main>
			<Footer />
		</>
	);
}
