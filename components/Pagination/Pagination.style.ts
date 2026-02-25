import styled from "styled-components";
import Link from "next/link";

const PaginationWrapper = styled.div`
	margin-bottom: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.75rem;
`;

const NavLink = styled(Link)<{ $isDisabled?: boolean }>`
	display: flex;
	align-items: center;
	color: inherit;

	${(props) =>
		props.$isDisabled &&
		`
    pointer-events: none;
    opacity: 0.25;
  `}

	html.dark & {
		color: var(--color-gray-300);
	}
`;

const PageLink = styled(Link)<{ $isActive?: boolean }>`
	border-radius: 0.375rem;
	padding: 1px 0.625rem;
	text-decoration: none;
	transition: all 0.3s ease;

	${(props) =>
		props.$isActive
			? `
    background-color: var(--color-primary);
    color: var(--color-black);
  `
			: `
    color: inherit;
    &:hover {
      background-color: var(--color-gray-100);
    }
  `}

	html.dark & {
		${(props) =>
			props.$isActive
				? `
      color: var(--color-black);
    `
				: `
      color: var(--color-gray-300);
      &:hover {
        background-color: var(--color-gray-700);
      }
    `}
	}
`;

const Ellipsis = styled.span`
	padding-left: 0.5rem;
	padding-right: 0.5rem;

	html.dark & {
		color: var(--color-gray-300);
	}
`;

export {
	PaginationWrapper,
	NavLink,
	PageLink,
	Ellipsis,
};
