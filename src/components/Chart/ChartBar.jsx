import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  // calculates how much a specific chartBar instance should be filled
  //   also going to be a dynamic CSS style for chart-bar__fill
  let barFillHeight = "0%";

  //this will give the percentage between 0 - 100 to which level the bar should be filled.

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        {/*This is a reminder of how this chart-bar will be filled  */}
        {/* dynamically passing a style thru an object, not double curly braces. */}
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
        {/* Dynamically output label so the label is visible */}
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
