import { authClient } from "@/lib/auth-client";

export const signInWithGoogle = async () => {
	await authClient.signIn.social({
		provider: "google",
	});
};

export const signInWithGithub = async () => {
	await authClient.signIn.social({
		provider: "github",
		callbackURL: "/dashboard",
		errorCallbackURL: "/sign-in",
	});
};
