import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const DUMMY_DATA = [
  { id: "e05", title: "Car", amount: 1000, date: new Date(2021, 2, 28) },
  { id: "e04", title: "Rent", amount: 300, date: new Date(2020, 2, 18) },
  { id: "e03", title: "Insurance", amount: 400, date: new Date(2020, 1, 23)},
  { id: "e02", title: "Grocery", amount: 800, date: new Date(2019, 2, 2)},
  { id: "e01", title: "Travel", amount: 200, date: new Date(2021, 0, 12) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = (expenseData) => {
    console.log("In App.js");
    console.log(expenseData);
    //updating (incorrect way)
    //setExpenses([expenseData, ...expenses])
    //updating the list using prevstate (correct way)
    setExpenses((prevExpenses) => {
      console.log([expenseData, ...prevExpenses]);
      return [expenseData, ...prevExpenses];
    });
  };

  // How actually an element is created

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, {items: element})
  // );

  // Doing the same with JSX

  // return (
  //   <div>
  //     <h2>Let's get started!</h2>
  //     <Expenses items={expenses} />
  //   </div>
  // );

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
