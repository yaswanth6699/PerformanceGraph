import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useGetTickerTrends } from "../hooks/useGetTickerTrends";
import Placeholder from "./Placeholder";

const Trends = ({ ticker }: { ticker: string }) => {
  const { data, isLoading } = useGetTickerTrends(ticker);

  if (isLoading)
    return <Placeholder text={`Fetching latest trends for ${ticker}....`} />;
  if (data?.length === 0)
    return (
      <Placeholder text={`Looks like no trends available for ${ticker}`} />
    );
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="period" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="strongBuy" stackId="a" fill="#67bf6b" />
        <Bar dataKey="buy" stackId="a" fill="#82ca9d" />
        <Bar dataKey="hold" stackId="a" fill="#ffc658" />
        <Bar dataKey="sell" stackId="a" fill="#ff8042" />
        <Bar dataKey="strongSell" stackId="a" fill="#ff0000" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Trends;
