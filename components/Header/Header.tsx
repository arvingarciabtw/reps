"use client";

import type { SessionType } from "@/lib/definitions";
import React from "react";
import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";
import SignOut from "@/components/SignOutDialog/SignOutDialog";
import ThemeToggle from "@/components/ThemeToggle";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import {
	HeaderWrapper,
	NavigationWrapper,
	Logo,
	AppName,
	RightSide,
	NavigationList,
	NavigationItem,
	TogglesWrapper,
	SignOutButton,
} from "@/components/Header/Header.style";

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
		<HeaderWrapper>
			<NavigationWrapper>
				<Link href={session !== null ? `/dashboard` : `/`}>
					<Logo />
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
						<ThemeToggle initialTheme={theme} />
						<MobileMenu
							session={session}
							onSignOut={handleSignOut}
							isSigningOut={isSigningOut}
						/>
					</TogglesWrapper>
				</RightSide>
			</NavigationWrapper>
		</HeaderWrapper>
	);
}
