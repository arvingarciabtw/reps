import type { SessionType } from "@/lib/definitions";
import { Menu, ArrowLeft } from "react-feather";
import { Dialog, VisuallyHidden } from "radix-ui";
import SignOut from "../auth/sign-out";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const MobileMenuButton = styled.button`
	margin-left: auto;
	cursor: pointer;
  background-color: transparent;
  border: none;

	html.dark & {
		color: var(--color-gray-300);
	}

	@media (min-width: 40rem) {
		display: none;
	}
`;

const StyledDialogOverlay = styled(Dialog.Overlay)`
	position: fixed;
	inset: 0;
	background-color: var(--color-black);
	opacity: 0.75;
`;

const StyledDialogContent = styled(Dialog.Content)`
	padding: 1.5rem;
	position: fixed;
	width: 100%;
	height: 100%;
	display: grid;
	place-items: center;
	background-color: var(--color-white);
	color: var(--color-gray-800);
	border: 1px solid var(--color-gray-700);
	outline: none;

	html.dark & {
		background-color: var(--color-black);
		color: var(--color-gray-300);
	}
`;

const StyledDialogClose = styled(Dialog.Close)`
	position: absolute;
	top: 1.5rem;
	left: 1.5rem;
`;

const NavigationList = styled.ul`
  padding: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	font-size: 1.5rem;
  list-style-type: none;
`;

const NavigationItem = styled.li`
	transition: opacity 0.3s ease;

	&:hover {
		opacity: 0.75;
	}

  & a {
    text-decoration: none;
    color: var(--color-black);
  }

  html.dark & a {
    color: var(--color-gray-300);
  }
`;

const SignOutButton = styled.button`
	cursor: pointer;
  background: transparent;
  border: none;

  html.dark & {
    color: var(--color-gray-300);
  }
`;

const BackButton = styled.button`
	cursor: pointer;
  background: transparent;
  border: none;

  html.dark & {
    color: var(--color-gray-300);
  }
`;

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
				<MobileMenuButton aria-label="Mobile menu">
					<Menu />
				</MobileMenuButton>
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
						<BackButton aria-label="Close">
							<ArrowLeft />
						</BackButton>
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
										<SignOutButton>Sign out</SignOutButton>
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
