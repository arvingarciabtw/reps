import * as CONSTANTS from "@/lib/constants/heatmap";
import { format } from "date-fns";
import { Tooltip } from "radix-ui";
import {
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
} from "@/components/Heatmap/Heatmap.style";

function HeatmapGrid({
	getHeatmapColor,
	generateCalendar,
}: {
	getHeatmapColor: (count: number) => string;
	generateCalendar: { date: Date; count: number }[][];
}) {
	return (
		<HeatmapOuterWrapper>
			<HeatmapInnerWrapper>
				<WeekdayLabelsWrapper>
					{CONSTANTS.WEEKDAYS.map((day, index) => (
						<WeekdayLabel key={index}>{day}</WeekdayLabel>
					))}
				</WeekdayLabelsWrapper>
				<CalendarGridWrapper>
					<MonthLabelsWrapper $generateCalendar={generateCalendar}>
						{generateCalendar.map((_, weekIndex) => {
							const weekDate = generateCalendar[weekIndex][0].date;
							const monthStart = weekDate.getDate() <= 7;
							const monthName = monthStart
								? CONSTANTS.MONTHS[weekDate.getMonth()]
								: "";

							return <MonthLabel key={weekIndex}>{monthName}</MonthLabel>;
						})}
					</MonthLabelsWrapper>
					<CalendarGrid $generateCalendar={generateCalendar}>
						{Array.from({ length: 7 }).map((_, dayIndex) => (
							<Row key={dayIndex}>
								{generateCalendar.map((week, weekIndex) => {
									const day = week[dayIndex];
									return (
										<Tooltip.Provider key={`${weekIndex}-${dayIndex}`}>
											<Tooltip.Root>
												<Tooltip.Trigger asChild>
													<Day
														$getHeatmapColor={getHeatmapColor}
														$count={day.count}
													/>
												</Tooltip.Trigger>
												<Tooltip.Portal>
													<StyledTooltipContent sideOffset={5}>
														{day.count === 0
															? `No reviews on ${format(day.date, "MMM do")}.`
															: `${day.count} ${day.count === 1 ? "review" : "reviews"} on ${format(day.date, "MMM do")}.`}
														<StyledTooltipArrow />
													</StyledTooltipContent>
												</Tooltip.Portal>
											</Tooltip.Root>
										</Tooltip.Provider>
									);
								})}
							</Row>
						))}
					</CalendarGrid>
				</CalendarGridWrapper>
			</HeatmapInnerWrapper>
		</HeatmapOuterWrapper>
	);
}

export default HeatmapGrid;
