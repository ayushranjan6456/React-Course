import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
// import React from 'react';

const App = () => {
  const element = [
    { title: "Car", amount: 1000, date: new Date(2021, 2, 28) },
    { title: "Rent", amount: 300, date: new Date(2021, 2, 18) },
    { title: "Insurance", amount: 100, date: new Date(2021, 2, 23) },
  ];

  const addExpenseHandler = (expenseData) => {
    console.log("In App.js");
    console.log(expenseData);
  };
  // return React.createElement(
  //   'div',
  //   {}, 
  //   React.createElement('h2', {}, "Let's get started!"), 
  //   React.createElement(Expenses, {items: element})
  // );
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={element} />
    </div>
  );
}


export default App;
