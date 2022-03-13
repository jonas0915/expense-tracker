import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart.jsx";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2019");

  // Recieving data from another component
  const filteredExpenseYear = (recieveFilterDate) => {
    setFilteredYear(recieveFilterDate);
    console.log("year " + recieveFilterDate);
  };

  const filteredByYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <li>
        <Card className="expenses">
          <ExpenseFilter
            //Adding a prop(selected) to render the value of receivedData
            selected={filteredYear}
            onAddFilterDate={filteredExpenseYear}
          />
          <ExpensesChart expenses={filteredByYear} />
          {/* Using map() method */}
          {/* props.items came from App.js */}
          {/* new array creating by filter() method */}

          <ExpensesList items={filteredByYear} />
        </Card>
      </li>
    </>
  );
}

export default Expenses;
