import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
// import AddNewExpenses from "../Expenses/AddNewExpenses";
import "./NewExpense.css";

// Data from expenseFrom is garhered and stored in this NewExpense component

function NewExpense(props) {
  // Data is received as a parameter enteredExpenseData
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const [expenseRender, setRenderExpense] = useState({ visible: true });

  const addingExpense = () => {
    setRenderExpense(false);
  };
  const buttonText = (
    <button className="add-new__expense" onClick={addingExpense}>
      Add New Expenses
    </button>
  );

  return (
    <>
      <div className="new-expense">
        {/* using "on" to emphasize that the value of the prop is a function that*/}
        {/* will be triggered when something happens in ExpenseForm component. */}
        {/* i.e when user uses the expenseForm data. */}

        {/* data from form is recieved by onSaveExpenseData */}

        {expenseRender ? (
          buttonText
        ) : (
          <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        )}
      </div>
    </>
  );
}

export default NewExpense;
