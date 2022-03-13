import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

// This is a stateless component. Or presentational/dumb component

function ExpenseItem(props) {
  return (
    <>
      <Card className="expense-item">
        {/* the ExpenseDate will be the content available inside the Card component props.children */}
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </>
  );
}

export default ExpenseItem;
