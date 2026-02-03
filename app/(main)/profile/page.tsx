import Image from "next/image";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default function ProfilePage() {
	return (
		<div className="flex flex-col gap-8 md:flex-row">
			<ProfileDescription />
		</div>
	);
}

async function ProfileDescription() {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session) return <p>No session found.</p>;

	console.log(session);

	return (
		<section className="flex items-center gap-4 md:flex-col md:items-start">
			<Image
				src={session.user.image || "/images/logo.svg"}
				alt="Profile picture"
				width={40}
				height={40}
				className="w-full max-w-20 rounded-full"
			/>
			<div className="flex flex-col gap-0.5">
				<h1 className="text-4xl md:text-2xl">{session.user.name}</h1>
				<p className="text-(--color-gray-300)">{session.user.email}</p>
			</div>
		</section>
	);
}
