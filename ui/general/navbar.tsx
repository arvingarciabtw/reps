"use client";

import type { SessionType } from "@/lib/definitions";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import SignOut from "../auth/sign-out";
import DarkLightToggle from "./theme-toggle";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import styled from "styled-components";

export default function NavBar({
	session,
	theme,
}: {
	session: SessionType;
	theme: string;
}) {
	const router = useRouter();
	const [isSigningOut, setIsSigningOut] = React.useState(false);

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
		<NavBarWrapper>
			<NavigationWrapper>
				<Link href={session !== null ? `/dashboard` : `/`}>
					<Logo
						src="/images/logo.svg"
						width={32}
						height={32}
						alt="Application logo"
						loading="eager"
					/>
				</Link>
				<AppName>reps</AppName>
				<RightSide>
					<NavigationList>
						<NavigationItem>
							<Link href="/overview">Overview</Link>
						</NavigationItem>
						{session === null && (
							<NavigationItem>
								<Link href="/dashboard">Sign in</Link>
							</NavigationItem>
						)}
						{session && (
							<NavigationItem>
								<Link href="/profile">Profile</Link>
							</NavigationItem>
						)}
						{session && (
							<NavigationItem>
								<SignOut onSignOut={handleSignOut} isSigningOut={isSigningOut}>
									<SignOutButton>Sign out</SignOutButton>
								</SignOut>
							</NavigationItem>
						)}
					</NavigationList>
					<TogglesWrapper>
						<DarkLightToggle initialTheme={theme} />
						<MobileMenu
							session={session}
							onSignOut={handleSignOut}
							isSigningOut={isSigningOut}
						/>
					</TogglesWrapper>
				</RightSide>
			</NavigationWrapper>
		</NavBarWrapper>
	);
}

const NavBarWrapper = styled.header``;

const NavigationWrapper = styled.nav`
	margin: auto;
	display: flex;
	max-width: 56rem;
	align-items: center;
	gap: 0.5rem;
	padding: 1.5rem;
`;

const Logo = styled(Image)`
	transition: opacity 0.3s ease;

	&:hover {
		opacity: 0.75;
	}
`;

const AppName = styled.h1`
	font-family: var(--font-logo);
	font-size: 1.5rem;
	color: var(--color-black);

	html.dark & {
		color: var(--color-white);
	}
`;

const RightSide = styled.div`
	margin-left: auto;
	display: flex;
	gap: 2.5rem;
`;

const NavigationList = styled.ul`
  padding-left: 0;
	margin-left: auto;
	display: none;
	align-items: center;
	gap: 2.5rem;
	color: var(--color-gray-800);
  list-style-type: none;

	html.dark & {
		color: var(--color-gray-300);
	}

	@media (min-width: 640px) {
		& {
			display: flex;
		}
	}
`;

const NavigationItem = styled.li`
	transition: opacity 0.3s ease;

	&:hover {
		opacity: 0.75;
	}

  & a {
    text-decoration: none;
    color: var(--color-gray-600); 
  }
  html.dark & a {
    color: var(--color-gray-300); 
  }
`;

const TogglesWrapper = styled.div`
	display: flex;
	gap: 1rem;
`;

const SignOutButton = styled.button`
	cursor: pointer;
  background-color: transparent;
  color: var(--color-gray-600);
  border: none;

  html.dark & {
    color: var(--color-gray-300);
  }
`;
