import styled from "styled-components";

const HeaderWrapper = styled.header``;

const NavigationWrapper = styled.nav`
	margin: auto;
	display: flex;
	max-width: var(--breakpoint-base);
	align-items: center;
	gap: var(--space-xs);
	padding: var(--space-lg);
`;

const Logo = styled.div`
	transition: opacity 0.3s ease;
	background-color: var(--color-primary);
	border-radius: var(--radius-full);
	width: 2rem;
	aspect-ratio: 1 / 1;

	&:hover {
		opacity: 0.75;
	}
`;

const AppName = styled.h1`
	font-family: var(--font-logo);
	font-size: var(--font-lg);
	font-weight: var(--weight-medium);
	color: var(--color-fg);
`;

const RightSide = styled.div`
	margin-left: auto;
	display: flex;
	gap: var(--space-2xl);
`;

const NavigationList = styled.ul`
	padding-left: 0;
	margin-left: auto;
	display: none;
	align-items: center;
	gap: var(--space-2xl);
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
		color: var(--color-gray-700);
	}
	html.dark & a {
		color: var(--color-gray-300);
	}
`;

const TogglesWrapper = styled.div`
	display: flex;
	gap: var(--space-md);
`;

const SignOutButton = styled.button`
	background-color: transparent;
	color: var(--color-gray-700);
	border: none;
	cursor: pointer;

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
