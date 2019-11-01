import React, { Component } from "react";
import "../../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  XAxis, // Shows the values on x axis
  YAxis, // Shows the values on y axis
  VerticalBarSeries,
  LabelSeries
} from "react-vis";
import { PlayerChartContainer } from "../styles/styles.js";

function PlayerChart(props) {
  const dataArr = props.players.map(player => {
    return { x: player.name, y: player.searches };
  });

  console.log("PlayerChart", props.players);

  const chartWidth = 1200;
  const chartHeight = 400;
  const chartDomain = [0, 100];

  return (
    <PlayerChartContainer>
      <XYPlot xType="ordinal" width={chartWidth} height={chartHeight} yDomain={chartDomain} margin={{ bottom: 200 }}>
        <VerticalBarSeries data={dataArr} />
        <XAxis tickFormat={v => `${v}`} tickLabelAngle={-90} />
        <YAxis />
      </XYPlot>
    </PlayerChartContainer>
  );
}

export default PlayerChart;
