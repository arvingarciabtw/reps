import styled from "styled-components";
import Link from "next/link";

const EmptyStateContainer = styled.div`
	margin-top: auto;
	margin-bottom: auto;
	display: flex;
	flex-direction: column;
	/* Fixed this line: */
	align-items: center;
	gap: 1rem;
	align-self: center;
	color: var(--color-gray-600);

	html.dark & {
		color: var(--color-gray-300);
	}
`;

const DashboardButton = styled.button`
	display: flex;
	cursor: pointer;
	align-items: center;
	gap: 0.5rem;
	border-radius: 1rem;
	border: 1px solid var(--color-gray-200);
	background-color: transparent;
	padding: 0.5rem 1.25rem;
	color: var(--color-gray-600);
	transition: all 0.3s ease;

	&:hover {
		background-color: #f3f4f6;
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}

	html.dark & {
		border-color: var(--color-gray-700);
		background-color: var(--color-gray-800);
		color: var(--color-gray-300);

		&:hover {
			background-color: var(--color-gray-800);
			color: var(--color-primary);
		}
	}
`;

const MainWrapper = styled.div`
	margin-top: auto;
	margin-bottom: auto;
	display: flex;
	height: 12.5rem;
	width: 100%;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	align-self: center;

	@media (min-width: 640px) {
		width: 26rem;
	}
`;

const ControlsWrapper = styled.div`
	display: flex;
	width: 100%;
	max-width: 26rem;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	gap: 0.5rem;
`;

const CardCount = styled.p`
	margin-right: auto;
	color: var(--color-gray-600);

	span {
		font-family: ui-sans-serif, system-ui, sans-serif;
	}

	html.dark & {
		color: var(--color-gray-300);
	}
`;

const ActionGroup = styled.div`
	display: flex;
	gap: 1rem;
`;

const BaseIconButton = styled.button`
	display: flex;
	cursor: pointer;
	align-items: center;
	gap: 0.5rem;
	border-radius: 1rem;
	padding: 0.25rem;
	color: var(--color-black);
	transition: all 0.3s ease;
	border: none;

	&:hover {
		opacity: 0.75;
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}
`;

const EditButton = styled(BaseIconButton)`
	display: grid;
	height: 1.625rem;
	width: 1.625rem;
	place-items: center;
	background-color: var(--color-primary);
`;

const CorrectButton = styled(BaseIconButton)`
	background-color: #4ade80;
`;

const WrongButton = styled(BaseIconButton)`
	background-color: #f87171;
`;

const StyledLink = styled(Link)`
	display: grid;
	height: 100%;
	width: 100%;
	place-items: center;
	color: var(--color-black);
`;

export {
	EmptyStateContainer,
	DashboardButton,
	MainWrapper,
	ControlsWrapper,
	CardCount,
	ActionGroup,
	EditButton,
	CorrectButton,
	WrongButton,
	StyledLink,
};
