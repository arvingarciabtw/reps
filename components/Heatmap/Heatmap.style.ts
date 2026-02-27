import styled from "styled-components";
import { Tooltip } from "radix-ui";
import { Select } from "radix-ui";

const HeatmapClientWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: var(--space-md);
`;

/*
  --- HEATMAP DESCRIPTION ---
*/

const HeatmapDescriptionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: var(--space-md);

	@media (min-width: 40rem) {
		flex-direction: row;
		align-items: end;
		justify-content: space-between;
	}
`;
const ReviewActivityWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
const ReviewActivityHeading = styled.h2`
	margin-bottom: var(--space-2xs);
	font-size: var(--font-md);
	font-weight: var(--weight-regular);
	color: var(--color-fg);
`;
const ReviewDetailsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0 var(--space-md);
	font-size: var(--space-sm);
	color: var(--color-gray-600);

	html.dark & {
		color: var(--color-gray-500);
	}
`;
const ReviewDetail = styled.span``;
const StyledSelectTrigger = styled(Select.Trigger)`
	display: flex;
	width: 5.875rem;
	cursor: pointer;
	align-items: center;
	gap: var(--space-sm);
	border-radius: var(--radius-sm);
	background-color: var(--color-gray-100);
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	padding-right: 0.75rem;
	padding-left: 1.125rem;
	font-size: 0.875rem;
	line-height: 1.25rem;
	color: var(--color-gray-800);
	outline: 0;
	border: 1px solid var(--color-gray-200);
	transition: background-color 0.3s ease;
	&:hover {
		background-color: var(--color-gray-150);
	}
	&:disabled {
		opacity: 0.5;
	}

	html.dark & {
		background-color: var(--color-gray-850);
		color: var(--color-gray-300);
		border-color: var(--color-gray-750);
	}
	html.dark &:hover {
		background-color: var(--color-gray-800);
	}
`;
const StyledSelectValue = styled(Select.Value)`
	color: var(--color-gray-300);
`;
const StyledSelectContent = styled(Select.Content)`
	padding: var(--space-sm) var(--space-sm);
	width: 5.875rem;
	background-color: var(--color-gray-100);
	border: 1px solid var(--color-gray-200);
	border-radius: var(--radius-md);
	box-shadow:
		0 20px 25px -5px rgba(3, 7, 18, 0.05),
		0 8px 10px -6px rgba(3, 7, 18, 0.05);

	html.dark & {
		background-color: var(--color-gray-850);
		border-color: var(--color-gray-750);
		box-shadow:
			0 20px 25px -5px rgba(3, 7, 18, 0.25),
			0 8px 10px -6px rgba(3, 7, 18, 0.25);
	}
`;
const StyledSelectGroup = styled(Select.Group)`
	display: flex;
	flex-direction: column;
	gap: var(--space-xs);
`;
const StyledSelectItem = styled(Select.Item)`
	padding: var(--space-2xs) 0;
	display: grid;
	cursor: pointer;
	place-items: center;
	border-radius: var(--radius-xs);
	font-size: var(--font-sm);
	line-height: 1.25rem;
	color: var(--color-gray-800);
	outline: 0;
	transition-property: all;
	transition-timing-function: ease;
	transition-duration: 300ms;
	&:hover {
		background-color: var(--color-gray-150);
	}
	html.dark & {
		color: var(--color-gray-300);
		&:hover {
			background-color: var(--color-gray-800);
		}
	}
`;

/*
  --- HEATMAP GRID ---
*/

const HeatmapOuterWrapper = styled.div`
	padding-bottom: var(--space-xs);
	overflow-x: auto;
	scrollbar-color: var(--color-gray-300) var(--color-bg);
	html.dark & {
		scrollbar-color: var(--color-gray-700) var(--color-bg);
	}
`;
const HeatmapInnerWrapper = styled.div`
	min-width: fit-content;
	display: inline-flex;
	gap: var(--space-xs);
`;
const WeekdayLabelsWrapper = styled.div`
	padding-top: var(--space-lg);
	display: flex;
	flex-direction: column;
	gap: var(--space-2xs);
`;
const WeekdayLabel = styled.div`
	width: 2rem;
	height: 0.75rem;
	font-size: var(--font-xs);
	line-height: 0.75rem;
	color: var(--color-gray-500);
`;
const CalendarGridWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: var(--space-2xs);
`;
const MonthLabelsWrapper = styled.div<{
	$generateCalendar: { date: Date; count: number }[][];
}>`
	margin-bottom: var(--space-xs);
	display: grid;
	grid-template-columns: repeat(
		${(props) => props.$generateCalendar.length},
		1fr
	);
	gap: var(--space-2xs);
	font-size: var(--font-xs);
	color: var(--color-gray-600);
	html.dark & {
		color: var(--color-gray-500);
	}
`;
const MonthLabel = styled.span`
	width: 0.75rem;
	text-align: center;
`;
const CalendarGrid = styled.div<{
	$generateCalendar: { date: Date; count: number }[][];
}>`
	display: grid;
	grid-template-columns: repeat(
		${(props) => props.$generateCalendar.length},
		1fr
	);
	gap: var(--space-2xs);
`;
const Row = styled.div`
	display: contents;
`;
const Day = styled.div<{
	$getHeatmapColor: (count: number) => string;
	$count: number;
}>`
	${(props) => props.$getHeatmapColor(props.$count)}
	width: 0.75rem;
	height: 0.75rem;
	border-radius: 0.125rem;
	cursor: pointer;
	transition: 0.3s ease;
	&:hover {
		opacity: 0.5;
	}
`;
const StyledTooltipContent = styled(Tooltip.Content)`
	padding: var(--space-2xs) var(--space-xs);
	border-radius: 0.375rem;
	background-color: var(--color-gray-150);
	color: var(--color-gray-700);
	font-size: var(--font-sm);
	line-height: 1.25rem;
	box-shadow:
		0 20px 25px -5px rgba(3, 7, 18, 0.05),
		0 8px 10px -6px rgba(3, 7, 18, 0.05);
	html.dark & {
		background-color: var(--color-gray-850);
		color: var(--color-gray-300);
	}
`;
const StyledTooltipArrow = styled(Tooltip.Arrow)`
	fill: var(--color-gray-150);
	html.dark & {
		fill: var(--color-gray-850);
	}
`;

/*
  --- HEATMAP LEGENDS ---
*/

const LegendsWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: var(--space-xs);
	font-size: var(--font-xs);
	color: var(--color-gray-500);
`;
const Label = styled.span``;
const ColorsWrapper = styled.div`
	display: flex;
	gap: var(--space-2xs);
`;
const Color = styled.div<{ $intensity: number }>`
	width: 0.75rem;
	height: 0.75rem;
	border-radius: 0.125rem;
	background-color: ${(props) =>
		props.$intensity === 0 ? "var(--color-gray-150)" : "var(--color-primary)"};
	opacity: ${(props) => (props.$intensity === 0 ? 1 : props.$intensity)};

	html.dark & {
		background-color: ${(props) =>
			props.$intensity === 0 && "var(--color-gray-850)"};
	}
`;

export {
	HeatmapClientWrapper,
	HeatmapDescriptionWrapper,
	ReviewActivityWrapper,
	ReviewActivityHeading,
	ReviewDetailsWrapper,
	ReviewDetail,
	StyledSelectTrigger,
	StyledSelectValue,
	StyledSelectContent,
	StyledSelectGroup,
	StyledSelectItem,
	HeatmapOuterWrapper,
	HeatmapInnerWrapper,
	WeekdayLabelsWrapper,
	WeekdayLabel,
	CalendarGridWrapper,
	MonthLabelsWrapper,
	MonthLabel,
	CalendarGrid,
	Row,
	Day,
	StyledTooltipContent,
	StyledTooltipArrow,
	LegendsWrapper,
	Label,
	ColorsWrapper,
	Color,
};
