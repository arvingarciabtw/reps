"use client";

import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import { AlertDialog } from "radix-ui";
import { useRouter } from "next/navigation";

import type { SessionType } from "@/lib/definitions";
import { authClient } from "@/lib/auth-client";

export default function NavBar({ session }: { session: SessionType }) {
	const router = useRouter();

	async function handleSignOut() {
		await authClient.signOut({
			fetchOptions: {
				onSuccess: () => {
					router.push("/");
					router.refresh();
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
				<MobileMenu session={session} onSignOut={handleSignOut} />
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
							<AlertDialog.Root>
								<AlertDialog.Trigger asChild>
									<button className="cursor-pointer">Sign Out</button>
								</AlertDialog.Trigger>
								<AlertDialog.Portal>
									<AlertDialog.Overlay className="fixed inset-0 bg-(--color-black) opacity-75" />
									<AlertDialog.Content className="fixed top-[50%] left-[50%] flex max-w-80 min-w-80 translate-x-[-50%] translate-y-[-50%] flex-col items-center rounded-2xl border border-(--color-gray-700) bg-(--color-gray-800) p-6 text-(--color-gray-300) outline-none">
										<AlertDialog.Title className="mb-2 text-2xl font-medium text-(--color-white)">
											Sign out?
										</AlertDialog.Title>
										<AlertDialog.Description className="mb-4 text-center">
											You are going to sign out of your account. Are you sure?
										</AlertDialog.Description>
										<div className="flex gap-4">
											<AlertDialog.Cancel asChild>
												<button className="ease cursor-pointer rounded-2xl bg-(--color-gray-700) px-5 py-2 transition duration-300 hover:opacity-75">
													Cancel
												</button>
											</AlertDialog.Cancel>
											<button
												onClick={handleSignOut}
												className="ease cursor-pointer rounded-2xl bg-(--color-primary) px-5 py-2 text-(--color-black) transition duration-300 hover:opacity-75"
											>
												Sign out
											</button>
										</div>
									</AlertDialog.Content>
								</AlertDialog.Portal>
							</AlertDialog.Root>
						</li>
					)}
				</ul>
			</nav>
		</header>
	);
}
