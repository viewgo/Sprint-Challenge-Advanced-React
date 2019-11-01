import React, { Component } from "react";
import "../../node_modules/react-vis/dist/style.css";
import {
    XYPlot,
    XAxis, // Shows the values on x axis
    YAxis, // Shows the values on y axis
    VerticalBarSeries,
    LabelSeries
} from 'react-vis';

function PlayerChart(props) {
  const data = [
    { x: 0, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 8, y: 2 },
    { x: 9, y: 0 }
  ];

  const dataArr = props.players.map((player)=> {
    return {x: player.name, 
    y: player.searches}
});

console.log("PlayerChart", props.players)

const chartWidth = 1200;
const chartHeight = 400;
const chartDomain = [0, 100];

  return (
    <>
      <XYPlot 
               xType="ordinal" 
               width={chartWidth} 
               height={chartHeight} 
               yDomain={chartDomain}
               margin={{bottom: 200}}
             >
                <VerticalBarSeries
                    data={dataArr}
                />
                {/* <XAxis title="Player" tickValues={[0,1,2,3,4]}/> */}
              
  <XAxis tickFormat={v => `${v}`} tickLabelAngle={-90} />
  
                <YAxis title="Number of searches" />
            </XYPlot>

    </>
  );
}

export default PlayerChart;
