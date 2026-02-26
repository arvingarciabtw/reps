import styled from "styled-components";
import { Tooltip } from "radix-ui";
import { Select } from "radix-ui";

const HeatmapClientWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

/*
  --- HEATMAP DESCRIPTION ---
*/

const HeatmapDescriptionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

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
	margin-bottom: 0.25rem;
	font-size: 1rem;
	font-weight: 400;

	html.dark & {
		color: var(--color-white);
	}
`;
const ReviewDetailsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0 1rem;
	font-size: 0.875rem;
	color: var(--color-gray-400);

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
	gap: 0.75rem;
	border-radius: 0.75rem;
	background-color: var(--color-gray-100);
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	padding-right: 0.75rem;
	padding-left: 1.125rem;
	font-size: 0.875rem;
	line-height: 1.25rem;
	color: var(--color-gray-800);
	outline: 0;
	border: none;

	&:disabled {
		opacity: 0.5;
	}

	html.dark & {
		background-color: var(--color-gray-800);
		color: var(--color-gray-300);
	}
`;
const StyledSelectValue = styled(Select.Value)`
	color: var(--color-gray-300);
`;
const StyledSelectContent = styled(Select.Content)`
	width: 5.875rem;
	border-radius: 1rem;
	background-color: var(--color-gray-100);
	padding: 0.75rem 0.75rem;
	box-shadow:
		0 20px 25px -5px rgba(3, 7, 18, 0.25),
		0 8px 10px -6px rgba(3, 7, 18, 0.25);

	html.dark & {
		background-color: var(--color-gray-800);
	}
`;
const StyledSelectGroup = styled(Select.Group)`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;
const StyledSelectItem = styled(Select.Item)`
	display: grid;
	cursor: pointer;
	place-items: center;
	border-radius: 0.5rem;
	padding-top: 0.25rem;
	padding-bottom: 0.25rem;
	font-size: 0.875rem;
	line-height: 1.25rem;
	color: var(--color-gray-800);
	outline: 0;
	transition-property: all;
	transition-timing-function: ease;
	transition-duration: 300ms;

	&:hover {
		background-color: var(--color-gray-800);
		color: var(--color-white);
	}

	html.dark & {
		color: var(--color-gray-300);

		&:hover {
			background-color: var(--color-primary);
			color: var(--color-black);
		}
	}
`;

/*
  --- HEATMAP GRID ---
*/

const HeatmapOuterWrapper = styled.div`
	padding-bottom: 0.5rem;
	overflow-x: auto;
`;
const HeatmapInnerWrapper = styled.div`
	min-width: fit-content;
	display: inline-flex;
	gap: 0.5rem;
`;
const WeekdayLabelsWrapper = styled.div`
	padding-top: 1.5rem;
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
`;
const WeekdayLabel = styled.div`
	width: 2rem;
	height: 0.75rem;
	font-size: 0.75rem;
	line-height: 0.75rem;
	color: var(--color-gray-400);
`;
const CalendarGridWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
`;
const MonthLabelsWrapper = styled.div<{
	$generateCalendar: { date: Date; count: number }[][];
}>`
	margin-bottom: 0.5rem;
	display: grid;
	grid-template-columns: repeat(
		${(props) => props.$generateCalendar.length},
		1fr
	);
	gap: 0.25rem;
	font-size: 0.75rem;
	color: var(--color-gray-400);
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
	gap: 0.25rem;
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
	border-radius: 0.375rem;
	background-color: var(--color-gray-800);
	padding: 0.25rem 0.5rem;
	font-size: 0.875rem;
	line-height: 1.25rem;
	color: var(--color-gray-300);
	box-shadow:
		0 20px 25px -5px rgba(3, 7, 18, 0.25),
		0 8px 10px -6px rgba(3, 7, 18, 0.25);
`;
const StyledTooltipArrow = styled(Tooltip.Arrow)`
	fill: var(--color-gray-800);
`;

/*
  --- HEATMAP LEGENDS ---
*/

const LegendsWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	font-size: 0.75rem;
	color: var(--color-gray-400);
`;
const Label = styled.span``;
const ColorsWrapper = styled.div`
	display: flex;
	gap: 0.25rem;
`;
const Color = styled.div<{ $intensity: number }>`
	width: 0.75rem;
	height: 0.75rem;
	border-radius: 0.125rem;
	background-color: ${(props) =>
		props.$intensity === 0 ? "var(--color-gray-100)" : "var(--color-primary)"};
	opacity: ${(props) => (props.$intensity === 0 ? 1 : props.$intensity)};

	html.dark & {
		background-color: ${(props) =>
			props.$intensity === 0 && "var(--color-gray-800)"};
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
