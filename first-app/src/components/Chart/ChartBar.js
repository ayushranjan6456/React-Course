import React from "react";

import './ChartBar.css'

const ChartBar = (props) => {

  let barFillHeight = '0%';
  if (props.maxValue>0){
    barFillHeight = Math.round((props.value / props.maxValue)*100)+'%';
  }
  console.log(props.value)
  console.log(barFillHeight)

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height: barFillHeight}}></div>    
        {/* style wants javascript object in React */}
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
