"use client";

import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import SignOut from "../auth/sign-out";
import { useRouter } from "next/navigation";
import { useState } from "react";

import type { SessionType } from "@/lib/definitions";
import { authClient } from "@/lib/auth-client";

export default function NavBar({ session }: { session: SessionType }) {
	const router = useRouter();
	const [isSigningOut, setIsSigningOut] = useState(false);

	async function handleSignOut() {
		setIsSigningOut(true);
		try {
			await authClient.signOut({
				fetchOptions: {
					onSuccess: () => {
						router.push("/");
						router.refresh();
					},
				},
			});
		} catch (error) {
			console.error("Sign out failed:", error);
			setIsSigningOut(false);
		}
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
				<MobileMenu
					session={session}
					onSignOut={handleSignOut}
					isSigningOut={isSigningOut}
				/>
				<ul className="ml-auto hidden gap-10 text-(--color-gray-300) sm:flex">
					{session !== null && (
						<li className="ease transition duration-300 hover:opacity-75">
							<Link href="/dashboard">Dashboard</Link>
						</li>
					)}
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
							<Link href="/profile">Profile</Link>
						</li>
					)}
					{session && (
						<li className="ease transition duration-300 hover:opacity-75">
							<SignOut onSignOut={handleSignOut} isSigningOut={isSigningOut}>
								<button
									className="cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
									disabled={isSigningOut}
								>
									Sign Out
								</button>
							</SignOut>
						</li>
					)}
				</ul>
			</nav>
		</header>
	);
}
