import React, { useRef, useEffect, useState } from "react";
import echarts, {
  EChartOption,
  ECharts,
  VisualMap,
  EChartsResponsiveOption,
  EChartsMediaOption,
} from "echarts";
import { graphql, useStaticQuery } from "gatsby";

import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import get from "lodash/get";
import { DateTime } from "luxon";
import { ActivityCalendarPostQuery } from "../generated/graphql";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

interface YearSelectorProps {
  years: number[];
  selectedYear: number;
  onYearSelected: (selectedYear: number) => void;
}

const useYearSelectorStyles = makeStyles(theme => ({
  triggerElementText: {
    ...theme.typography.h5,
  },
}));
const YearSelector: React.FC<YearSelectorProps> = props => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useYearSelectorStyles();
  return (
    <div>
      <Button
        classes={{ text: classes.triggerElementText }}
        variant="text"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {props.selectedYear}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {props.years
          .sort((a, b) => b - a)
          .map(year => (
            <MenuItem
              onClick={() => {
                props.onYearSelected(year);
                setAnchorEl(null);
              }}
              key={year}
            >
              {year}
            </MenuItem>
          ))}
      </Menu>
    </div>
  );
};

const CELL_PER_ROW = 80;
const CELL_PER_COLUMN = 14;

const option: EChartsResponsiveOption = {
  baseOption: {
    tooltip: {},
    visualMap: [
      {
        min: 0,
        type: "piecewise",
        orient: "horizontal",
        left: "center",
        top: 0,
        textStyle: {
          color: "#000",
        },
      },
    ],
    calendar: {
      left: "center",
    },
    series: [
      {
        type: "heatmap",
        coordinateSystem: "calendar",
      },
    ],
  } as EChartOption<EChartOption.SeriesHeatmap>,
};

const useStyles = makeStyles(theme => {
  const heights = theme.breakpoints.keys
    .sort((b1, b2) => theme.breakpoints.width(b1) - theme.breakpoints.width(b2))
    .reduce(
      (accumulator, breakpoint, i, arr) => {
        if (i + 1 < arr.length) {
          const width = theme.breakpoints.width(arr[i + 1]);
          const cellSize = width / CELL_PER_ROW;
          accumulator[theme.breakpoints.between(breakpoint, breakpoint)] = {
            height: cellSize * CELL_PER_COLUMN,
          };
        } else {
          const width = theme.breakpoints.width(breakpoint);
          const cellSize = width / CELL_PER_ROW;
          accumulator[theme.breakpoints.up(breakpoint)] = {
            height: cellSize * CELL_PER_COLUMN,
          };
        }
        return accumulator;
      },
      {} as { [key in string]: unknown }
    );
  return {
    chartDiv: {
      width: "100%",
      ...heights,
    },
  };
});

function getMediaOptions(theme: Theme): EChartsMediaOption[] {
  return Object.values(theme.breakpoints.values)
    .sort((a, b) => a - b)
    .map((width, index, arr) => {
      const min = width;
      const max = index + 1 < arr.length ? arr[index + 1] : undefined;
      const cellSize = (max || min) / CELL_PER_ROW;
      return {
        query: {
          minWidth: min,
          maxWidth: max,
        },
        option: {
          visualMap: [
            {
              show: cellSize >= 15,
            },
          ],
          calendar: {
            top: cellSize > 15 ? 50 : "center",
            cellSize: [cellSize, cellSize],
            monthLabel: { show: cellSize > 10 },
            dayLabel: { show: cellSize > 10 },
            yearLabel: { show: cellSize > 10 },
            itemStyle: {
              borderWidth: cellSize > 10 ? 0.5 : 0.2,
            },
            splitLine: {
              lineStyle: {
                width: cellSize > 10 ? 1 : 0.5,
              },
            },
          },
        },
      };
    });
}

function processData(
  selectedYear: number,
  posts: ActivityCalendarPostQuery["allBlogPost"]["nodes"]
): { data: EChartOption.SeriesHeatmap["data"]; years: number[]; max: number } {
  const years: number[] = [];
  const data = [];
  let max = 0;

  for (let i = 0; i < posts.length; ++i) {
    // handle years array
    {
      let year;
      if (
        years[years.length - 1] !==
        (year = new Date(posts[i].date).getFullYear())
      ) {
        years.push(year);
      }
    }

    // handle data array
    if (
      DateTime.fromISO(get(data[data.length - 1], "[0]", null)).hasSame(
        DateTime.fromISO(posts[i].date),
        "day"
      )
    ) {
      ++data[data.length - 1][1];
    } else {
      data.push([posts[i].date, 1]);
    }

    // handle max
    if (max < data[data.length - 1][1]) {
      max = data[data.length - 1][1];
    }
  }
  return { data, years, max };
}

function getDiscretePieces(
  max: number,
  splitNumber: number
): VisualMap.Piecewise["pieces"] {
  const pieces = [];
  const step = Math.floor(max / splitNumber);
  for (let i = step; i <= max; i += step) {
    pieces.push({
      min: i - step,
      max: i,
    });
  }
  if (max % splitNumber != 0) {
    pieces.push({
      min: pieces[pieces.length - 1].max,
      max: max,
    });
  }
  return pieces;
}

const ActivityCalendar: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const data = useStaticQuery<ActivityCalendarPostQuery>(graphql`
    query ActivityCalendarPost {
      allBlogPost(sort: { fields: date, order: ASC }) {
        nodes {
          date
        }
      }
    }
  `);

  const [chart, setChart] = useState<ECharts | null>(null);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [availableYears, setAvailableYears] = useState([
    new Date().getFullYear(),
  ]);

  useEffect(() => {
    if (chartRef.current !== null) {
      setChart(echarts.init(chartRef.current));
    }
  }, [chartRef]);

  useEffect(() => {
    if (chart) {
      const { data: parsedData, years, max } = processData(
        selectedYear,
        data.allBlogPost.nodes
      );
      setAvailableYears(years);
      option!.baseOption!.visualMap![0].max = max;
      (option!.baseOption!
        .visualMap![0] as VisualMap.Piecewise).pieces = getDiscretePieces(
        max,
        3
      );
      (option!.baseOption!.calendar as EChartOption.Calendar)!.range =
        new Date().getFullYear() === selectedYear
          ? [
              DateTime.local()
                .minus({ years: 1 })
                .toFormat("yyyy-MM-dd"),
              DateTime.local().toFormat("yyyy-MM-dd"),
            ]
          : selectedYear;
      (option!.baseOption!
        .series![0] as EChartOption.SeriesHeatmap).data = parsedData;
      chart.setOption(option);
    }
  }, [chart, data, selectedYear]);

  useEffect(() => {
    function handleResize() {
      if (chart) {
        chart.resize();
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [chart]);

  const theme = useTheme();

  useEffect(() => {
    if (chart && theme) {
      option.media = getMediaOptions(theme);
      chart.setOption(option);
    }
  }, [chart, theme]);

  const classes = useStyles();

  return (
    <React.Fragment>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box display="flex" flexDirection="row" alignItems="center">
          <Typography variant="h5" component="h2">
            Activity Calendar:
          </Typography>
          <YearSelector
            selectedYear={selectedYear}
            years={availableYears}
            onYearSelected={setSelectedYear}
          />
        </Box>
        <div ref={chartRef} className={classes.chartDiv}></div>
      </Box>
    </React.Fragment>
  );
};

export default ActivityCalendar;
