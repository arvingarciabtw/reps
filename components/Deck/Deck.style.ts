import styled from "styled-components";
import Link from "next/link";

const DeckWrapper = styled.article`
	position: relative;
	height: 4rem;

	// This one is more of a card fanning animation
	// &:hover > .x1 {
	//   transform: translateY(2%) rotate(-2deg);
	// }
	// &:hover > .x2 {
	//   transform: translateY(0%) rotate(0deg);
	// }
	// &:hover > .x3 {
	//   transform: translateY(-2%) rotate(2deg);
	// }

	// This one resembles a stack of cards more
	&:hover > .x1 {
		transform: translateY(0%) rotate(0deg);
	}
	&:hover > .x2 {
		transform: translateY(-6%) rotate(0deg);
	}
	&:hover > .x3 {
		transform: translateY(-12%) rotate(0deg);
	}
	&:hover > .x4 {
		transform: translateY(-18%) rotate(0deg);
	}
	&:hover > .x5 {
		transform: translateY(-24%) rotate(0deg);
	}
`;
const Card = styled.div`
	padding: 0 var(--space-md);
	width: 100%;
	height: 100%;
	position: absolute;
	display: grid;
	place-items: center;
	background: var(--color-gray-100);
	border: 1px solid var(--color-gray-200);
	border-radius: var(--radius-md);
	transition: ease 0.3s;
	transition-timing-function: cubic-bezier(0.83, 0.11, 0.14, 0.4);

	html.dark & {
		background-color: var(--color-gray-850);
		border-color: var(--color-gray-750);
	}
`;

const ActionsWrapper = styled.div`
	display: flex;
	gap: 0;
	color: var(--color-gray-700);

	html.dark & {
		color: var(--color-gray-300);
	}

	& > * {
		width: 28px;
		aspect-ratio: 1 / 1;
		color: var(--color-fg);
	}
	html.dark & > * {
		color: var(--color-gray-300);
	}
`;

const ReviewDeckWrapper = styled(Link)`
	width: 100%;
	text-decoration: none;
	color: var(--color-fg);
	cursor: pointer;
`;

const ViewDeckWrapper = styled(Link)`
	cursor: pointer;
	border-radius: var(--radius-full);
	padding: 0.375rem;
	text-decoration: none;
	transition-property: all;
	transition-timing-function: ease;
	transition-duration: 300ms;

	&:hover {
		background-color: var(--color-gray-100);
	}

	html.dark & {
		&:hover {
			background-color: var(--color-gray-700);
		}
	}
`;

export {
	DeckWrapper,
	Card,
	ActionsWrapper,
	ReviewDeckWrapper,
	ViewDeckWrapper,
};
