export enum Tabs {
  SUMMARY = "Summary",
  CHART = "Chart",
  TRENDS = "Trends",
}

export enum Dates {
  "3days" = "D3",
  "1week" = "W1",
  "1month" = "M1",
  "6months" = "M6",
  "1year" = "Y1",
  "5year" = "Y5",
  "MAX" = "MAX",
}

export type ChartType = {
  prices: ChartDataTypes[];
};

export type ChartDataTypes = {
  adjclose: number;
  close: number;
  date: number;
  high: number;
  low: number;
  open: number;
  volume: number;
};

export type StatsTypes = {
  country: string;
  currency: string;
  estimateCurrency: string;
  exchange: string;
  finnhubIndustry: string;
  ipo: string;
  logo: string;
  marketCapitalization: number;
  name: string;
  phone: string;
  shareOutstanding: number;
  ticker: string;
  weburl: string;
};

export type TrendTypes = {
  buy: number;
  hold: number;
  period: string;
  sell: number;
  strongBuy: number;
  strongSell: number;
  symbol: string;
};
