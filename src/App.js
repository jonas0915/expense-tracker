import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const dummy_expenses = [
  {
    id: "e1",
    title: "Car insurnce",
    amount: 94.122,
    date: new Date(2020, 9, 14)
  },
  {
    id: "e2",
    title: "New Tv",
    amount: 7999.49,
    date: new Date(2020, 7, 14)
  },
  {
    id: "e3",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12)
  },
  {
    id: "e4",
    title: "Pen",
    amount: 1.53,
    date: new Date(2022, 6, 21)
  },
  {
    id: "e45",
    title: "Ball",
    amount: 4,
    date: new Date(2019, 5, 21)
  },
  {
    id: "e47",
    title: "Pen",
    amount: 1.53,
    date: new Date(2019, 5, 21)
  },
  {
    id: "e48",
    title: "Mouse",
    amount: 300,
    date: new Date(2021, 6, 21)
  },
  {
    id: "e49",
    title: "Ball",
    amount: 100,
    date: new Date(2021, 1, 21)
  },
  {
    id: "e50",
    title: "Rock",
    amount: 340,
    date: new Date(2021, 12, 21)
  },
  {
    id: "e51",
    title: "Keyboard",
    amount: 234,
    date: new Date(2021, 4, 21)
  }
];

function App() {
  // Dynamic way of adding new items in the array.
  const [expenses, setExpenses] = useState(dummy_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  // ----------//
  return (
    <>
      <React.StrictMode>
        <div>
          <NewExpense onAddExpense={addExpenseHandler} />
          <Expenses items={expenses} />
        </div>
      </React.StrictMode>
    </>
  );
}

export default App;
