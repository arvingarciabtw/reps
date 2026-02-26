import styled from "styled-components";

const HeaderWrapper = styled.header``;

const NavigationWrapper = styled.nav`
	margin: auto;
	display: flex;
	max-width: 56rem;
	align-items: center;
	gap: 0.5rem;
	padding: 1.5rem;
`;

const Logo = styled.div`
	transition: opacity 0.3s ease;
	background-color: var(--color-primary);
	border-radius: 50%;
	width: 2rem;
	aspect-ratio: 1 / 1;

	&:hover {
		opacity: 0.75;
	}
`;

const AppName = styled.h1`
	font-family: var(--font-logo);
	font-size: 1.25rem;
	font-weight: 500;
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

export {
	HeaderWrapper,
	NavigationWrapper,
	Logo,
	AppName,
	RightSide,
	NavigationList,
	NavigationItem,
	TogglesWrapper,
	SignOutButton,
};
