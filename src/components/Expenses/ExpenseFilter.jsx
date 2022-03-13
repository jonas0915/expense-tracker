import React from "react";
import "./ExpenseFilter.css";

//Controlled component
function ExpensesFilter(props) {
  // Sending data to another component
  function filteredYear(event) {
    const filterDate = event.target.value;
    props.onAddFilterDate(filterDate);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        {/* sending the of selected prop thru value */}
        <select value={props.selected} onChange={filteredYear}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
