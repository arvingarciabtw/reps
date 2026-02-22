import type { ReviewStats } from "@/lib/definitions";
import { ChevronDown } from "react-feather";
import { Select } from "radix-ui";
import {
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
} from "@/ui/profile/heatmap/heatmap.style";

function HeatmapDescription({
	initialStats,
	initialYear,
	availableYears,
	isPending,
	handleYearChange,
}: {
	initialStats: ReviewStats;
	initialYear: number;
	availableYears: number[];
	isPending: boolean;
	handleYearChange: (year: string) => void;
}) {
	return (
		<HeatmapDescriptionWrapper>
			<ReviewActivityWrapper>
				<ReviewActivityHeading>Review Activity</ReviewActivityHeading>
				<ReviewDetailsWrapper>
					<ReviewDetail>
						{initialStats.totalReviews.toLocaleString()} total reviews
					</ReviewDetail>
					<ReviewDetail>
						{initialStats.yearReviews.toLocaleString()} reviews this year
					</ReviewDetail>
					<ReviewDetail>
						{initialStats.dayReviews.toLocaleString()} reviews today
					</ReviewDetail>
				</ReviewDetailsWrapper>
			</ReviewActivityWrapper>

			<Select.Root
				value={initialYear.toString()}
				onValueChange={handleYearChange}
				disabled={isPending}
			>
				<StyledSelectTrigger aria-label="year">
					<StyledSelectValue placeholder={initialYear.toString()} />
					<Select.Icon>
						<ChevronDown style={{ width: "1rem", height: "1rem" }} />
					</Select.Icon>
				</StyledSelectTrigger>
				<Select.Portal>
					<StyledSelectContent position="popper" sideOffset={8}>
						<Select.ScrollUpButton />
						<Select.Viewport>
							<StyledSelectGroup>
								{availableYears.map((year) => (
									<StyledSelectItem key={year} value={year.toString()}>
										<Select.ItemText>{year}</Select.ItemText>
									</StyledSelectItem>
								))}
							</StyledSelectGroup>
						</Select.Viewport>
						<Select.ScrollDownButton />
					</StyledSelectContent>
				</Select.Portal>
			</Select.Root>
		</HeatmapDescriptionWrapper>
	);
}

export default HeatmapDescription;
