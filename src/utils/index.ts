import { format } from "date-fns";
import { ChartDataTypes, Dates } from "../types";

const timeValObj = {
  D3: 3,
  W1: 7,
  M1: 30,
  M6: 180,
  Y1: 365,
  Y5: 365 * 5,
  MAX: "MAX",
};

const dateformatObj = {
  D3: "MMM d",
  W1: "MMM d",
  M1: "MMM d",
  M6: "MMM d",
  Y1: "MMM yy",
  Y5: "yyyy",
  MAX: "yyyy",
};

export const transformChartData = (
  data: ChartDataTypes[],
  date: Dates
): Array<{ D: number; P: number }> => {
  const today = new Date();
  const timeVal = timeValObj[date];

  const customDate =
    timeVal === Dates.MAX
      ? new Date()
      : today.getTime() - (timeVal as number) * 24 * 60 * 60 * 1000;

  const filteredArr =
    timeVal === Dates.MAX
      ? data
      : data?.filter((obj) => {
          const objDate = new Date(obj.date * 1000);
          return objDate >= customDate && objDate <= today;
        });

  return (
    filteredArr
      ?.map((item) => ({
        D: item.date,
        P: item.close,
      }))
      .reverse() || []
  );
};

export const xAxisTickerFormat = (val: string, date: Dates) => {
  return format(new Date(+val * 1000), dateformatObj[date]);
};

export const getLatestPrice = (data: ChartDataTypes[]) => {
  if (!data) return;
  const lastClosePrice = data?.[0]?.close ?? 0;
  const prevClosePrice = data?.[1]?.close ?? 0;

  return {
    price: lastClosePrice?.toFixed(2),
    priceChange: (lastClosePrice - prevClosePrice ?? 0)?.toFixed(2),
    percentChange: (
      ((lastClosePrice - prevClosePrice) / (prevClosePrice || 1)) *
      100
    )?.toFixed(2),
  };
};

export const getTickerSummary = () => {
  return [
    { label: "ticker", key: "ticker" },
    { label: "name", key: "name" },
    { label: "exchange", key: "exchange" },
    { label: "country", key: "country" },
    { label: "industry", key: "finnhubIndustry" },
    { label: "market", key: "marketCapitalization" },
    { label: "ipo", key: "ipo" },
  ];
};
