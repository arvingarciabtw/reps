import { AlertDialog } from "radix-ui";
import {
	StyledOverlay,
	StyledContent,
	StyledTitle,
	StyledDescription,
	ButtonGroup,
	ActionButton,
} from "@/ui/auth/sign-out.style";

export default function SignOut({
	onSignOut,
	isSigningOut,
	children,
}: {
	onSignOut: () => void;
	isSigningOut?: boolean;
	children: React.ReactNode;
}) {
	return (
		<AlertDialog.Root>
			<AlertDialog.Trigger asChild>{children}</AlertDialog.Trigger>
			<AlertDialog.Portal>
				<StyledOverlay />
				<StyledContent>
					<StyledTitle>Sign out?</StyledTitle>
					<StyledDescription>
						You are going to sign out of your account. Are you sure?
					</StyledDescription>
					<ButtonGroup>
						<AlertDialog.Cancel asChild>
							<ActionButton disabled={isSigningOut}>Cancel</ActionButton>
						</AlertDialog.Cancel>
						<ActionButton onClick={onSignOut} disabled={isSigningOut}>
							Sign out
						</ActionButton>
					</ButtonGroup>
				</StyledContent>
			</AlertDialog.Portal>
		</AlertDialog.Root>
	);
}
