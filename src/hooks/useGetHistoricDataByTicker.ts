import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ChartType } from "../types";

export const useGetHistoricDataByTicker = (ticker: string) => {
  // always use try, catch block to make sure the code wont break when there is any error and add appropriate console.
  // or in actual products we can use sentry to capture error messages for better debugging.
  const fetchHistoricData = async () => {
    try {
      const nowTime = Math.floor(new Date().getTime() / 1000);
      const { data } = await axios.get(
        `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-historical-data?frequency=1y&filter=history&period1=631152000&period2=${nowTime}&symbol=${ticker}`,
        {
          headers: {
            "X-RapidAPI-Key": import.meta.env.VITE_YAHOO_TOKEN,
          },
        }
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  return useQuery<ChartType>({
    queryKey: ["historic-data", ticker],
    queryFn: fetchHistoricData,
    enabled: !!ticker,
  });
};
