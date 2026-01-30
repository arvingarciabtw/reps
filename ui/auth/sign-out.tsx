import { AlertDialog } from "radix-ui";

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
				<AlertDialog.Overlay className="fixed inset-0 bg-(--color-black) opacity-75" />
				<AlertDialog.Content className="fixed top-[50%] left-[50%] flex max-w-80 min-w-80 translate-x-[-50%] translate-y-[-50%] flex-col items-center rounded-2xl border border-(--color-gray-700) bg-(--color-gray-800) p-6 text-(--color-gray-300) outline-none">
					<AlertDialog.Title className="mb-2 text-2xl font-medium text-(--color-white)">
						Sign out?
					</AlertDialog.Title>
					<AlertDialog.Description className="mb-4 text-center">
						You are going to sign out of your account. Are you sure?
					</AlertDialog.Description>
					<div className="flex gap-4">
						<AlertDialog.Cancel asChild>
							<button
								className="ease cursor-pointer rounded-2xl bg-(--color-gray-700) px-5 py-2 transition duration-300 hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50"
								disabled={isSigningOut}
							>
								Cancel
							</button>
						</AlertDialog.Cancel>
						<button
							onClick={onSignOut}
							disabled={isSigningOut}
							className="ease cursor-pointer rounded-2xl bg-(--color-primary) px-5 py-2 text-(--color-black) transition duration-300 hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50"
						>
							Sign out
						</button>
					</div>
				</AlertDialog.Content>
			</AlertDialog.Portal>
		</AlertDialog.Root>
	);
}
