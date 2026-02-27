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
	gap: var(--space-xl);
`;

const ProfileSection = styled.section`
	display: flex;
	align-items: center;
	gap: var(--space-md);
`;

const ProfileImage = styled(Image)`
	width: 100%;
	max-width: 5rem;
	height: auto;
	border-radius: var(--radius-full);
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const UserName = styled.h1`
	font-size: var(--font-2xl);
	font-weight: var(--weight-bold);
	color: var(--color-fg);
`;

const UserEmail = styled.p`
	margin-top: calc(var(--space-xs) - (2 * var(--space-xs)));
	color: var(--color-gray-700);

	html.dark & {
		color: var(--color-gray-300);
	}
`;
