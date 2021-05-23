import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  /* Adding dynamically using map, mapping the array into a conponent */
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return (
    <div className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );

  /*  To do the conditional content showing using && operator  */

  /* {filteredExpenses.length === 0 && <p> No expenses Found </p>}
        {filteredExpenses.length>0 && filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */
};

export default ExpensesList;
