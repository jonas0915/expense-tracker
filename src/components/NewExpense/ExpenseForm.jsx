import React, { useState } from "react";

import "./ExpenseForm.css";

// Data is collected in this component and ends up in the app component

function ExpenseForm(props) {
  //   Handling multiple State
  //   const [userInput, setUserInput] = useState({
  //     titleEntered: "Title",
  //     amountEntered: "",
  //     dateEntered: ""
  //   });

  //   Updating 1 new state in a state object
  //   const titleChangeHandler = (event) => {
  //     setUserInput((prevStatte) => {
  //       {
  //         return { ...prevStatte, titleEntered: event.target.value };
  //       }
  //     });
  //   };

  const [titleEntered, setTitleEntered] = useState("");
  const [amountEntered, setAmountEntered] = useState("");
  const [dateEntered, setDateEntered] = useState("");

  const titleChangeHandler = (event) => {
    setTitleEntered(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmountEntered(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDateEntered(event.target.value);
  };

  const submitHandler = (event) => {
    console.log("Clicked Add Expense! && Cancel");
    setButtonCancel(false);
    event.preventDefault();

    const expenseData = {
      title: titleEntered,
      amount: +amountEntered,
      date: new Date(dateEntered)
    };

    // expenseData value will be sent to newExpense component the prop
    props.onSaveExpenseData(expenseData);
    setTitleEntered("");
    setAmountEntered("");
    setDateEntered("");
  };

  //State will run when "Add New Expense" is clicked.
  const [buttonCancel, setButtonCancel] = useState({ visble: true });

  const cancelButton = (
    <button
      onClick={() => {
        setButtonCancel(false);
      }}
    >
      Cancel
    </button>
  );

  return (
    <>
      <React.StrictMode>
        <div>
          {buttonCancel ? (
            <form onSubmit={submitHandler}>
              <div className="new-expense__controls">
                <div className="new-expense__control">
                  <label>Title</label>
                  <input
                    type="text"
                    //Two way Binding: passing a new value back to input.
                    // value is binded to titleEntered.
                    value={titleEntered}
                    onChange={titleChangeHandler}
                  />
                </div>
                <div className="new-expense__control">
                  <label>Amount</label>
                  <input
                    type="number"
                    value={amountEntered}
                    min="0.01"
                    step="0.01"
                    onChange={amountChangeHandler}
                  />
                </div>
                <div className="new-expense__control">
                  <label>Date</label>
                  <input
                    type="date"
                    value={dateEntered}
                    min="2019-01-01"
                    max="2022- 12-31"
                    onChange={dateChangeHandler}
                  />
                </div>
              </div>
              <div className="new-expense__actions">
                {cancelButton}
                <button
                  type="submit"
                  onClick={() => {
                    setButtonCancel(true);
                  }}
                >
                  Add Expense
                </button>
              </div>
            </form>
          ) : (
            <button
              className="add-new__expense"
              onClick={() => {
                setButtonCancel(true);
              }}
            >
              Add New Expenses
            </button>
          )}
        </div>
      </React.StrictMode>
    </>
  );
}

export default ExpenseForm;
