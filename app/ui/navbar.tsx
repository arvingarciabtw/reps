"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "react-feather";
import { useRouter } from "next/navigation";

import type { Session } from "@/lib/definitions";
import { authClient } from "@/lib/auth-client";

export default function NavBar({ session }: { session: Session }) {
	const router = useRouter();

	async function handleSignOut() {
		await authClient.signOut({
			fetchOptions: {
				onSuccess: () => {
					router.refresh();
					router.push("/");
				},
			},
		});
	}

	return (
		<header>
			<nav className="m-auto flex max-w-4xl items-center gap-3 p-6">
				<Link href={session !== null ? `/dashboard` : `/`}>
					<Image
						className="ease transition duration-300 hover:opacity-75"
						src="/images/logo.svg"
						width={32}
						height={32}
						alt="Application logo"
						loading="eager"
					/>
				</Link>
				<h1 className="font-logo text-2xl">reps</h1>
				<button className="ml-auto hover:cursor-pointer sm:hidden">
					<Menu />
				</button>
				<ul className="ml-auto hidden gap-10 text-(--color-gray-300) sm:flex">
					<li className="ease transition duration-300 hover:opacity-75">
						<Link href="/about">About</Link>
					</li>
					{session === null && (
						<li className="ease transition duration-300 hover:opacity-75">
							<Link href="/dashboard">Launch App</Link>
						</li>
					)}
					{session && (
						<li className="ease transition duration-300 hover:opacity-75">
							<button onClick={handleSignOut} className="cursor-pointer">
								Sign Out
							</button>
						</li>
					)}
				</ul>
			</nav>
		</header>
	);
}
