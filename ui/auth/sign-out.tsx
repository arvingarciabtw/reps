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
				<AlertDialog.Content className="fixed top-[50%] left-[50%] flex w-full max-w-80 translate-x-[-50%] translate-y-[-50%] flex-col items-center rounded-2xl border border-(--color-gray-700) bg-(--color-white) p-6 text-(--color-gray-300) outline-none dark:bg-(--color-gray-800)">
					<AlertDialog.Title className="mb-2 text-2xl font-medium text-(--color-gray-800) dark:text-(--color-white)">
						Sign out?
					</AlertDialog.Title>
					<AlertDialog.Description className="mb-4 text-center text-(--color-gray-600) dark:text-(--color-gray-300)">
						You are going to sign out of your account. Are you sure?
					</AlertDialog.Description>
					<div className="flex gap-4">
						<AlertDialog.Cancel asChild>
							<button
								className="ease flex cursor-pointer items-center gap-2 rounded-2xl border border-(--color-gray-200) bg-transparent px-5 py-2 text-(--color-gray-600) transition duration-300 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-(--color-gray-700) dark:bg-(--color-gray-700) dark:text-(--color-gray-300) hover:dark:bg-(--color-gray-700) dark:hover:opacity-75"
								disabled={isSigningOut}
							>
								Cancel
							</button>
						</AlertDialog.Cancel>
						<button
							onClick={onSignOut}
							disabled={isSigningOut}
							className="ease flex cursor-pointer items-center gap-2 rounded-2xl border border-(--color-gray-200) bg-transparent px-5 py-2 text-(--color-gray-600) transition duration-300 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-(--color-gray-700) dark:bg-(--color-gray-700) dark:text-(--color-gray-300) hover:dark:bg-(--color-gray-700) dark:hover:opacity-75"
						>
							Sign out
						</button>
					</div>
				</AlertDialog.Content>
			</AlertDialog.Portal>
		</AlertDialog.Root>
	);
}
