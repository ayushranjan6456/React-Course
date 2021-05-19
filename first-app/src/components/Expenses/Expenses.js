import React, { useState } from "react";

import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear() === parseInt(filteredYear);
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses } />
      </Card>
    </div>
  );
};

export default Expenses;
