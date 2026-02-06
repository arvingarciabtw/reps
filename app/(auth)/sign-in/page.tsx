"use client";

import { GitHub } from "react-feather";
import { signInWithGoogle } from "@/actions/auth-actions";
import { signInWithGithub } from "@/actions/auth-actions";
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
		<div className="flex flex-col items-center text-(--color-gray-600) dark:text-(--color-gray-300)">
			<p className="max-w-md text-center">
				This app currently only supports signing in with either Google or
				GitHub. Choose your preferred sign-in method below.
			</p>
			<div className="mt-4 flex gap-4 text-(--color-white) dark:text-(--color-gray-300)">
				<button
					className="ease flex cursor-pointer items-center gap-2 rounded-2xl border border-(--color-gray-700) bg-(--color-gray-800) px-5 py-2 transition duration-300 hover:text-(--color-primary) disabled:cursor-not-allowed disabled:opacity-50"
					onClick={handleGoogleSignIn}
					disabled={isLoading}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						className="h-3.5 w-3.5"
						viewBox="0 0 16 16"
					>
						<path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
					</svg>
					Google
				</button>
				<button
					className="ease flex cursor-pointer items-center gap-2 rounded-2xl border border-(--color-gray-700) bg-(--color-gray-800) px-5 py-2 transition duration-300 hover:text-(--color-primary) disabled:cursor-not-allowed disabled:opacity-50"
					onClick={handleGithubSignIn}
					disabled={isLoading}
				>
					<GitHub className="h-4 w-4" />
					GitHub
				</button>
			</div>
		</div>
	);
}
