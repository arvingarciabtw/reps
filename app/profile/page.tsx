import styled from "styled-components";
import Image from "next/image";
import Heatmap from "@/components/Heatmap";
import { getSession } from "@/utils/session";

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
	const session = await getSession();

	if (!session) return null;

	return (
		<ProfileSection>
			<ProfileImage
				src={session.user.image || "/images/logo.svg"}
				alt="Profile picture"
				width={80}
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
	font-size: 2rem;
	font-weight: 700;

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
