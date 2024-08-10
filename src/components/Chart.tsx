import { format } from "date-fns";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartWrapper } from "../styles/Wrapper";
import { Dates } from "../types";
import { xAxisTickerFormat } from "../utils";
import Placeholder from "./Placeholder";

const Chart = ({
  chartData,
  selectedDate,
  isLoading,
  query,
}: {
  chartData: { P: number; D: number }[];
  selectedDate: Dates;
  isLoading: boolean;
  query: string;
}) => {
  if (isLoading)
    return <Placeholder text={`Fetching Historical Data for ${query}...`} />;

  if (!chartData)
    return (
      <Placeholder
        text={`${query}? Oops! It seems like there's no data available for the ticker you
            searched. try another one.`}
      />
    );

  return (
    <ChartWrapper width="100%" height={300}>
      <AreaChart
        height={300}
        data={chartData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient
            id="colorUv"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
            gradientTransform="rotate(10)"
          >
            <stop
              offset="10%"
              stopColor="rgba(225, 231, 255, 1)"
              stopOpacity={0.75}
            />
            <stop offset="100%" stopColor="white" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid />
        <XAxis
          type="category"
          dataKey="D"
          padding={{ left: 2, right: 2 }}
          tickFormatter={(val) => xAxisTickerFormat(val, selectedDate)}
          minTickGap={24}
          interval="preserveStartEnd"
          tickLine={false}
          dy={8}
          fontSize={14}
        />
        <YAxis
          dataKey={"P"}
          type="number"
          tickFormatter={(val) => `$${val}`}
          tickLine={false}
          fontSize={14}
        />
        <Tooltip
          cursor={{ stroke: "#3959DE", strokeWidth: 6 }}
          content={({ payload }) => {
            return (
              <div className="tooltip">
                {payload?.[0]?.payload?.D &&
                  format(
                    new Date(payload?.[0]?.payload?.D * 1000),
                    "MMM d, yyyy"
                  )}
                <br />
                <p>${payload?.[0]?.payload?.P?.toFixed(2)}</p>
              </div>
            );
          }}
        />
        <Area type="monotone" dataKey="P" dot={false} fill="url(#colorUv)" />
      </AreaChart>
    </ChartWrapper>
  );
};

export default Chart;
