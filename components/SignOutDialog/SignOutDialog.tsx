import { AlertDialog } from "radix-ui";
import Button from "@/components/Button";
import {
	StyledOverlay,
	StyledContent,
	StyledTitle,
	StyledDescription,
	ButtonGroup,
} from "@/components/SignOutDialog/SignOutDialog.style";

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
							<Button variant="regular" disabled={isSigningOut}>
								Cancel
							</Button>
						</AlertDialog.Cancel>
						<Button
							variant="danger"
							onClick={onSignOut}
							disabled={isSigningOut}
						>
							Sign out
						</Button>
					</ButtonGroup>
				</StyledContent>
			</AlertDialog.Portal>
		</AlertDialog.Root>
	);
}
