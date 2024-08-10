import { useQuery } from "@tanstack/react-query";
import axios from "../../node_modules/axios/index";
import { StatsTypes } from "../types";

export const useGetStatsByTicker = (ticker: string) => {
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
