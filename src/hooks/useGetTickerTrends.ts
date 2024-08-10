import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { TrendTypes } from "../types";

export const useGetTickerTrends = (ticker: string) => {
  // always use try, catch block to make sure the code wont break when there is any error and add appropriate console.
  // or in actual products we can use sentry to capture error messages for better debugging.
  const fetchTrends = async () => {
    try {
      const { data } = await axios.get(
        `https://finnhub.io/api/v1/stock/recommendation?symbol=${ticker}&token=${
          import.meta.env.VITE_FINNHUB_TOKEN
        }`
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  return useQuery<TrendTypes[]>({
    queryKey: ["ticker-trends", ticker],
    queryFn: fetchTrends,
    enabled: !!ticker,
  });
};
