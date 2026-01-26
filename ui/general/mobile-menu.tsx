import type { Session } from "@/lib/definitions";
import { Menu, ArrowLeft } from "react-feather";
import { Dialog, AlertDialog, VisuallyHidden } from "radix-ui";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu({
	session,
	onSignOut,
}: {
	session: Session;
	onSignOut: () => void;
}) {
	const [open, setOpen] = useState(false);

	return (
		<Dialog.Root open={open} onOpenChange={setOpen}>
			<Dialog.Trigger asChild>
				<button className="ml-auto hover:cursor-pointer sm:hidden">
					<Menu />
				</button>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className="fixed inset-0 bg-(--color-black) opacity-75" />
				<Dialog.Content className="fixed grid h-full w-full place-items-center border border-(--color-gray-700) bg-(--color-black) p-6 text-(--color-gray-300) outline-none">
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
										Sign In
									</Link>
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
													You are going to sign out of your account. Are you
													sure?
												</AlertDialog.Description>
												<div className="flex gap-4">
													<AlertDialog.Cancel asChild>
														<button className="ease cursor-pointer rounded-2xl bg-(--color-gray-700) px-5 py-2 transition duration-300 hover:opacity-75">
															Cancel
														</button>
													</AlertDialog.Cancel>
													<button
														onClick={() => {
															onSignOut();
															setOpen(false);
														}}
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
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
