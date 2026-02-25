import styled from "styled-components";
import Image from "next/image";
import Heatmap from "@/components/Heatmap";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default function ProfilePage({
	searchParams,
}: {
	searchParams: { year?: string };
}) {
	return (
		<PageContainer>
			<ProfileDescription />
			<HeatmapSection searchParams={searchParams} />
		</PageContainer>
	);
}

async function ProfileDescription() {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session) return null;

	return (
		<ProfileSection>
			<ProfileImage
				src={session.user.image || "/images/logo.svg"}
				alt="Profile picture"
				width={80} // Set to 80 to match max-w-20 (5rem) logic
				height={80}
			/>
			<TextContainer>
				<UserName>{session.user.name}</UserName>
				<UserEmail>{session.user.email}</UserEmail>
			</TextContainer>
		</ProfileSection>
	);
}

async function HeatmapSection({
	searchParams,
}: {
	searchParams: { year?: string };
}) {
	const year = searchParams.year ? parseInt(searchParams.year) : undefined;

	return <Heatmap year={year} />;
}

const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

const ProfileSection = styled.section`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

const ProfileImage = styled(Image)`
	width: 100%;
	max-width: 5rem; /* max-w-20 */
	height: auto;
	border-radius: 9999px;
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const UserName = styled.h1`
	font-size: 2.25rem; /* text-4xl */

	html.dark & {
		color: var(--color-white);
	}
`;

const UserEmail = styled.p`
	color: var(--color-gray-600);

	html.dark & {
		color: var(--color-gray-300);
	}
`;
