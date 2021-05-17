import React, { useState } from 'react';

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  const data = props.items;

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
        <ExpenseItem
          title={data[0].title}
          amount={data[0].amount}
          date={data[0].date}
        />
        <ExpenseItem
          title={data[1].title}
          amount={data[1].amount}
          date={data[1].date}
        />
        <ExpenseItem
          title={data[2].title}
          amount={data[2].amount}
          date={data[2].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
