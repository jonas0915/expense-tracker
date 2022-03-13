import React from "react";
import Chart from "../Chart/Chart.jsx";

const ExpensesChart = (props) => {
  // Adding objects in the array since dataPoints will be a bunch of objects
  const chartDataPoints = [
    { label: "Jan", value: 0, id: "d1" },
    { label: "Feb", value: 0, id: "d2" },
    { label: "Mar", value: 0, id: "d3" },
    { label: "Apr", value: 0, id: "d4" },
    { label: "May", value: 0, id: "d5" },
    { label: "Jun", value: 0, id: "d6" },
    { label: "Jul", value: 0, id: "d7" },
    { label: "Aug", value: 0, id: "d8" },
    { label: "Sep", value: 0, id: "d9" },
    { label: "Oct", value: 0, id: "d10" },
    { label: "Nov", value: 0, id: "d11" },
    { label: "Dec", value: 0, id: "d12" }
  ];
  // loop thru all expenses by props and lookthru each expense and get the month then update the value.
  //using for of loop not in because expenses is an array !object
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
    //adding a shortcut value by += operator.
    // value is increase thru expense.amount
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
