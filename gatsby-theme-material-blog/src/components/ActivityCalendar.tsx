import React, { useRef, useEffect, useState } from "react";
import echarts, {
  EChartOption,
  ECharts,
  VisualMap,
  EChartsResponsiveOption,
} from "echarts";
import { graphql, useStaticQuery } from "gatsby";

import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import get from "lodash/get";
import { DateTime } from "luxon";
import { ActivityCalendarPostQuery } from "../generated/graphql";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

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
        {props.years.map(year => (
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
      top: 50,
      left: "center",
      cellSize: [15, 15],
      itemStyle: {
        borderWidth: 0.5,
      },
      yearLabel: { show: false },
    },
    series: [
      {
        type: "heatmap",
        coordinateSystem: "calendar",
      },
    ],
  } as EChartOption<EChartOption.SeriesHeatmap>,
  media: [
    {
      query: {
        minWidth: 960,
      },
      option: {
        visualMap: [
          {
            show: false,
          },
        ],
        calendar: {
          cellSize: [12, 12],
        },
      },
    },
    {
      query: {
        minWidth: 600,
        maxWidth: 800,
      },
      option: {
        visualMap: [
          {
            show: false,
          },
        ],
        calendar: {
          cellSize: [12, 12],
        },
      },
    },
    {
      query: {
        maxWidth: 600,
      },
      option: {
        visualMap: [
          {
            show: false,
          },
        ],
        calendar: {
          cellSize: [600 / 60, 600 / 60],
        },
      },
    },
  ],
};

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

const useStyles = makeStyles({
  chartDiv: {
    width: "100%",
    height: "30vh",
  },
});

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
