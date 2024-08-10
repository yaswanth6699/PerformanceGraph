import { useState } from "react";
import ReactModal from "react-modal";
import { CloseLogo } from "../assets/CloseLogo";
import { FullScreenLogo } from "../assets/FullScreenLogo";
import { DATE_FORMATS, TABS_CONTENT } from "../constants";
import { useGetHistoricDataByTicker } from "../hooks/useGetHistoricDataByTicker";
import { useGetStatsByTicker } from "../hooks/useGetStatsByTicker";
import { CloseButton, GraphWrapper, customStyles } from "../styles/Wrapper";
import { Dates, Tabs } from "../types";
import { getLatestPrice, transformChartData } from "../utils";
import Chart from "./Chart";
import Summary from "./Summary";
import Trends from "./Trends";
const PerformanceGraph = ({ query }: { query: string }) => {
  const [selectedTab, toggleSelectedTab] = useState<Tabs>(Tabs.CHART);
  const [selectedDate, toggleSelectedDate] = useState<Dates>(Dates["1year"]);
  const [fullScreen, toggleFullScreen] = useState(false);
  const handleClick = (tab: Tabs) => {
    toggleSelectedTab(tab);
  };
  const { data, isLoading } = useGetHistoricDataByTicker(query);

  const { data: stats } = useGetStatsByTicker(query);

  const chartData = transformChartData(data?.prices || [], selectedDate);

  const latestPrice = getLatestPrice(data?.prices || []);

  const TABS = {
    [Tabs.SUMMARY]: <Summary ticker={query} />,
    [Tabs.CHART]: (
      <Chart
        chartData={chartData}
        selectedDate={selectedDate}
        isLoading={isLoading}
        query={query}
      />
    ),
    [Tabs.TRENDS]: <Trends ticker={query} />,
  };

  return (
    <GraphWrapper>
      <div className="ticker-details">
        <div className="price">
          <div className="nav">
            <h1>{latestPrice?.price}</h1>
            <p>USD</p>
          </div>
          <h2 className="priceChange">
            {latestPrice?.priceChange} ({latestPrice?.percentChange}%)
          </h2>
        </div>
        <div className="logo">
          <div>
            <h2>{stats?.ticker}</h2>
            <h2>{stats?.name}</h2>
          </div>
          <img src={stats?.logo} />
        </div>
      </div>

      <div className="tabs">
        {TABS_CONTENT.map((d) => (
          <p
            className={`${selectedTab === d.label ? "selectedTab" : ""} tab`}
            key={d.label}
            onClick={() => handleClick(d.label)}
          >
            {d.label}
          </p>
        ))}
      </div>
      {selectedTab !== Tabs.SUMMARY && (
        <div className="settings">
          <p className="fullscreen" onClick={() => toggleFullScreen(true)}>
            <FullScreenLogo />
            Fullscreen
          </p>
          {selectedTab === Tabs.CHART && (
            <div className="datePicker">
              {DATE_FORMATS.map((d) => (
                <p
                  className={`${
                    selectedDate === d.name ? "selectedDate" : ""
                  } date`}
                  onClick={() => toggleSelectedDate(d.name as Dates)}
                >
                  {d.label}
                </p>
              ))}
            </div>
          )}
        </div>
      )}
      <div className="Tab">{TABS[selectedTab]}</div>
      <ReactModal
        isOpen={fullScreen}
        onRequestClose={() => toggleFullScreen(false)}
        style={{
          ...customStyles,
        }}
      >
        <CloseButton onClick={() => toggleFullScreen(false)}>
          <CloseLogo />
        </CloseButton>
        <div className="Tab">{TABS[selectedTab]}</div>
      </ReactModal>
    </GraphWrapper>
  );
};

export default PerformanceGraph;
