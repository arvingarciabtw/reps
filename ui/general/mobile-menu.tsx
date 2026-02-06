import type { SessionType } from "@/lib/definitions";
import { Menu, ArrowLeft } from "react-feather";
import { Dialog, VisuallyHidden } from "radix-ui";
import SignOut from "../auth/sign-out";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu({
	session,
	onSignOut,
	isSigningOut,
}: {
	session: SessionType;
	onSignOut: () => void;
	isSigningOut?: boolean;
}) {
	const [open, setOpen] = useState(false);

	return (
		<Dialog.Root open={open} onOpenChange={setOpen}>
			<Dialog.Trigger asChild>
				<button className="ml-auto hover:cursor-pointer sm:hidden dark:text-(--color-gray-300)">
					<Menu />
				</button>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className="fixed inset-0 bg-(--color-black) opacity-75" />
				<Dialog.Content className="fixed grid h-full w-full place-items-center border border-(--color-gray-700) bg-(--color-white) p-6 text-(--color-gray-800) outline-none dark:bg-(--color-black) dark:text-(--color-gray-300)">
					<VisuallyHidden.Root>
						<Dialog.Title>Mobile Menu</Dialog.Title>
					</VisuallyHidden.Root>
					<VisuallyHidden.Root>
						<Dialog.Description>Menu for navigation</Dialog.Description>
					</VisuallyHidden.Root>
					<Dialog.Close asChild className="absolute top-6 left-6">
						<button aria-label="Close">
							<ArrowLeft />
						</button>
					</Dialog.Close>
					<nav>
						<ul className="flex flex-col items-center gap-4 text-2xl">
							{session !== null && (
								<li className="ease transition duration-300 hover:opacity-75">
									<Link
										href="/dashboard"
										onClick={() => setTimeout(() => setOpen(false), 500)}
									>
										Dashboard
									</Link>
								</li>
							)}
							<li className="ease transition duration-300 hover:opacity-75">
								<Link
									href="/about"
									onClick={() => setTimeout(() => setOpen(false), 500)}
								>
									About
								</Link>
							</li>
							{session === null && (
								<li className="ease transition duration-300 hover:opacity-75">
									<Link
										href="/dashboard"
										onClick={() => setTimeout(() => setOpen(false), 500)}
									>
										Sign in
									</Link>
								</li>
							)}
							{session && (
								<li className="ease transition duration-300 hover:opacity-75">
									<Link
										href="/profile"
										onClick={() => setTimeout(() => setOpen(false), 500)}
									>
										Profile
									</Link>
								</li>
							)}
							{session && (
								<li className="ease transition duration-300 hover:opacity-75">
									<SignOut onSignOut={onSignOut} isSigningOut={isSigningOut}>
										<button
											className="cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
											disabled={isSigningOut}
										>
											Sign out
										</button>
									</SignOut>
								</li>
							)}
						</ul>
					</nav>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
