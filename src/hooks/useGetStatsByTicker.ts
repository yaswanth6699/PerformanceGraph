import { useQuery } from "@tanstack/react-query";
import axios from "../../node_modules/axios/index";
import { StatsTypes } from "../types";

export const useGetStatsByTicker = (ticker: string) => {
  // always use try, catch block to make sure the code wont break when there is any error and add appropriate console.
  // or in actual products we can use sentry to capture error messages for better debugging.
  const fetchStats = async () => {
    try {
      const { data } = await axios.get(
        `https://finnhub.io/api/v1/stock/profile2?symbol=${ticker}&token=${
          import.meta.env.VITE_FINNHUB_TOKEN
        }`
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  return useQuery<StatsTypes>({
    queryKey: ["fetch-stats", ticker],
    queryFn: fetchStats,
    enabled: !!ticker,
  });
};
