import React from "react";
import ChartBar from "./ChartBar.jsx";
import "./Chart.css";

const Chart = (props) => {
  // Calculates the total "MaxValue". Look thru all the Months and find the biggest value across all months.
  //since it will be shown on the chart

  //Transforming the chartValue object in the ExpensesChart.jsx to number so it can be passed into totalmaximum component
  //every dataPoint that's recieved will be only taking it's value. Map will return a brand new array of all the values.
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <>
      <div className="chart">
        {/*1. dataPoints hold a value that is an array of the data that is going to be passed */}
        {/*2. (dataPoint) = map the value of every data point into the ChartBar component  */}
        {/*3. pass a data into the  component to control how it's rendered. i.e which value is rendered? */}
        {/*4. ChartBar will recieve a value prop and will recieve a prop of datapoint.value  */}
        {/*5. dataPoint is an object that has a value property  */}
        {/*6. Every chartbar will have a maxValue. */}
        {props.dataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.id}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        ))}
      </div>
    </>
  );
};

export default Chart;
