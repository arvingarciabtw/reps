import styled from "styled-components";
import Link from "next/link";

const EmptyStateContainer = styled.div`
	margin-top: auto;
	margin-bottom: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	align-self: center;
	color: var(--color-gray-600);

	html.dark & {
		color: var(--color-gray-300);
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

const StyledLink = styled(Link)`
	display: grid;
	height: 100%;
	width: 100%;
	place-items: center;
	color: var(--color-black);
`;

export {
	EmptyStateContainer,
	MainWrapper,
	ControlsWrapper,
	CardCount,
	ActionGroup,
	StyledLink,
};
