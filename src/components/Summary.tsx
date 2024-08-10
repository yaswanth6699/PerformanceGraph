import { useGetStatsByTicker } from "../hooks/useGetStatsByTicker";
import { SummaryWrapper } from "../styles/Wrapper";
import { StatsTypes } from "../types";
import { getTickerSummary } from "../utils";
import Placeholder from "./Placeholder";

const Summary = ({ ticker }: { ticker: string }) => {
  const { data, isLoading } = useGetStatsByTicker(ticker);

  if (isLoading)
    return <Placeholder text={`Fetching latest trends for ${ticker}....`} />;
  if (!data || !Object.keys(data).length)
    return (
      <Placeholder text={`Looks like no summary available for ${ticker}`} />
    );
  return (
    <SummaryWrapper>
      <img src={data?.logo} />
      <div className="row">
        {getTickerSummary()?.map((d) => (
          <h3 key={d.key}>
            {d.label}: <b>{data?.[d.key as keyof StatsTypes]}</b>
          </h3>
        ))}
      </div>
    </SummaryWrapper>
  );
};

export default Summary;
