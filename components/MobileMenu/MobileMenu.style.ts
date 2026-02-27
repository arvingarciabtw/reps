import styled from "styled-components";
import { Dialog } from "radix-ui";
import Button from "@/components/Button";

const MobileMenuTrigger = styled(Button)`
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
	padding: var(--space-lg);
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
	top: var(--space-lg);
	left: var(--space-lg);
`;

const NavigationList = styled.ul`
	padding: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: var(--space-md);
	font-size: var(--font-lg);
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

const SignOutTrigger = styled.button`
	cursor: pointer;
	background: transparent;
	border: none;

	html.dark & {
		color: var(--color-gray-300);
	}
`;

export {
	MobileMenuTrigger,
	StyledDialogOverlay,
	StyledDialogContent,
	StyledDialogClose,
	NavigationList,
	NavigationItem,
	SignOutTrigger,
};
