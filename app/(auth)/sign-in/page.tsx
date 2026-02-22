"use client";

import styled from "styled-components";
import { GitHub } from "react-feather";
import { signInWithGoogle, signInWithGithub } from "@/actions/auth-actions";
import { useState } from "react";

export default function SignInPage() {
	const [isLoading, setIsLoading] = useState(false);

	const handleGoogleSignIn = async () => {
		setIsLoading(true);
		try {
			await signInWithGoogle();
		} catch (error) {
			console.error("Google sign-in failed:", error);
			setIsLoading(false);
		}
	};

	const handleGithubSignIn = async () => {
		setIsLoading(true);
		try {
			await signInWithGithub();
		} catch (error) {
			console.error("GitHub sign-in failed:", error);
			setIsLoading(false);
		}
	};

	return (
		<Container>
			<InstructionText>
				This app currently only supports signing in with either Google or
				GitHub. Choose your preferred sign-in method below.
			</InstructionText>
			<ButtonGroup>
				<AuthButton onClick={handleGoogleSignIn} disabled={isLoading}>
					<GoogleIcon
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 16 16"
					>
						<path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
					</GoogleIcon>
					Google
				</AuthButton>
				<AuthButton onClick={handleGithubSignIn} disabled={isLoading}>
					<GitHub style={{ height: "1rem", width: "1rem" }} />
					GitHub
				</AuthButton>
			</ButtonGroup>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: var(--color-gray-600);

	html.dark & {
		color: var(--color-gray-300);
	}
`;

const InstructionText = styled.p`
	max-width: 28rem; /* max-w-md */
	text-align: center;
`;

const ButtonGroup = styled.div`
	margin-top: 1rem;
	display: flex;
	gap: 1rem;
	color: var(--color-white);

	html.dark & {
		color: var(--color-gray-300);
	}
`;

const AuthButton = styled.button`
	display: flex;
	cursor: pointer;
	align-items: center;
	gap: 0.5rem;
	border-radius: 1rem;
	border: 1px solid var(--color-gray-200);
	background-color: transparent;
	padding: 0.5rem 1.25rem;
	color: var(--color-gray-600);
	transition: all 0.3s ease;

	&:hover {
		background-color: #f3f4f6; /* gray-100 */
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}

	html.dark & {
		border-color: var(--color-gray-700);
		background-color: var(--color-gray-800);
		color: var(--color-gray-300);

		&:hover {
			background-color: var(--color-gray-800);
			color: var(--color-primary);
		}
	}
`;

const GoogleIcon = styled.svg`
	height: 0.875rem;
	width: 0.875rem;
`;
