import NavBar from "@/ui/general/navbar";
import Footer from "@/ui/general/footer";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { cookies } from "next/headers";
import styled from "styled-components";

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
			<MainContent>{children}</MainContent>
			<Footer />
		</>
	);
}

const MainContent = styled.main`
	position: relative;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	width: 100%;
	max-width: 56rem;
	flex: 1;
	flex-direction: column;
	padding: 1.5rem;
`;
