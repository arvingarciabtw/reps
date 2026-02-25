import type { SessionType } from "@/lib/definitions";
import React from "react";
import { Menu, ArrowLeft } from "react-feather";
import { Dialog, VisuallyHidden } from "radix-ui";
import SignOut from "@/components/SignOutDialog/SignOutDialog";
import Link from "next/link";
import Button from "@/components/Button";
import {
	MobileMenuTrigger,
	StyledDialogOverlay,
	StyledDialogContent,
	StyledDialogClose,
	NavigationList,
	NavigationItem,
	SignOutTrigger,
} from "@/components/MobileMenu/MobileMenu.style";

export default function MobileMenu({
	session,
	onSignOut,
	isSigningOut,
}: {
	session: SessionType;
	onSignOut: () => void;
	isSigningOut?: boolean;
}) {
	const [open, setOpen] = React.useState(false);

	return (
		<Dialog.Root open={open} onOpenChange={setOpen}>
			<Dialog.Trigger asChild>
				<MobileMenuTrigger variant="icon" aria-label="Mobile menu">
					<Menu />
				</MobileMenuTrigger>
			</Dialog.Trigger>
			<Dialog.Portal>
				<StyledDialogOverlay />
				<StyledDialogContent>
					<VisuallyHidden.Root>
						<Dialog.Title>Mobile Menu</Dialog.Title>
					</VisuallyHidden.Root>
					<VisuallyHidden.Root>
						<Dialog.Description>Menu for navigation</Dialog.Description>
					</VisuallyHidden.Root>
					<StyledDialogClose asChild>
						<Button variant="icon" aria-label="Close">
							<ArrowLeft />
						</Button>
					</StyledDialogClose>
					<nav>
						<NavigationList>
							{session !== null && (
								<NavigationItem>
									<Link
										href="/dashboard"
										onClick={() => setTimeout(() => setOpen(false), 500)}
									>
										Dashboard
									</Link>
								</NavigationItem>
							)}
							{session === null && (
								<NavigationItem>
									<Link
										href="/"
										onClick={() => setTimeout(() => setOpen(false), 500)}
									>
										Home
									</Link>
								</NavigationItem>
							)}
							<NavigationItem>
								<Link
									href="/overview"
									onClick={() => setTimeout(() => setOpen(false), 500)}
								>
									Overview
								</Link>
							</NavigationItem>
							{session === null && (
								<NavigationItem>
									<Link
										href="/dashboard"
										onClick={() => setTimeout(() => setOpen(false), 500)}
									>
										Sign in
									</Link>
								</NavigationItem>
							)}
							{session && (
								<NavigationItem>
									<Link
										href="/profile"
										onClick={() => setTimeout(() => setOpen(false), 500)}
									>
										Profile
									</Link>
								</NavigationItem>
							)}
							{session && (
								<NavigationItem>
									<SignOut onSignOut={onSignOut} isSigningOut={isSigningOut}>
										<SignOutTrigger>Sign out</SignOutTrigger>
									</SignOut>
								</NavigationItem>
							)}
						</NavigationList>
					</nav>
				</StyledDialogContent>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
