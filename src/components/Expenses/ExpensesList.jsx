import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesFilter.css';

const ExpensesList = props => {
    if(props.items.length === 0){
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }

    return <div className="expenses-list">
        {props.items.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={'$' + expense.amount}
                    date={expense.date}
                />
            ))}
    </div>;

}

export default ExpensesList;