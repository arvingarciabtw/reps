import NavBar from "@/ui/general/navbar";
import Footer from "@/ui/general/footer";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (session) redirect("/dashboard");

	const savedTheme = (await cookies()).get("color-theme");
	const theme = savedTheme?.value || "light";

	return (
		<>
			<NavBar session={session} theme={theme} />
			<main className="mx-auto grid w-full max-w-4xl flex-1 place-items-center p-6">
				{children}
			</main>
			<Footer />
		</>
	);
}
