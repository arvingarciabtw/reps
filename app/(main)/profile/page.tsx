import Image from "next/image";
import Heatmap from "@/ui/profile/heatmap";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default function ProfilePage({
	searchParams,
}: {
	searchParams: { year?: string };
}) {
	return (
		<div className="flex flex-col gap-8">
			<ProfileDescription />
			<HeatmapSection searchParams={searchParams} />
		</div>
	);
}

async function ProfileDescription() {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session) return null;

	return (
		<section className="flex items-center gap-4">
			<Image
				src={session.user.image || "/images/logo.svg"}
				alt="Profile picture"
				width={40}
				height={40}
				className="w-full max-w-20 rounded-full"
			/>
			<div className="flex flex-col gap-0.5">
				<h1 className="text-4xl dark:text-(--color-white)">
					{session.user.name}
				</h1>
				<p className="text-(--color-gray-600) dark:text-(--color-gray-300)">
					{session.user.email}
				</p>
			</div>
		</section>
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
