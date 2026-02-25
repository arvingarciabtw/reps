import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import styled from "styled-components";

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
			<Header session={session} theme={theme} />
			<MainContent>{children}</MainContent>
			<Footer />
		</>
	);
}

const MainContent = styled.main`
	margin-left: auto;
	margin-right: auto;
	display: grid;
	width: 100%;
	max-width: 56rem; /* max-w-4xl */
	flex: 1;
	place-items: center;
	padding: 1.5rem; /* p-6 */
`;
