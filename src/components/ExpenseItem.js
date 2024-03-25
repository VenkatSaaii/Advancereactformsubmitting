import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import React, { useState } from "react";
import "./ExpenseItem.css";

function ExpenseItem(props) {
    const [expense, setExpense] = useState(props.price);

    const clickHandler = () => {
        setExpense('100');
       
        console.log(expense) 
      };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h1>{props.title}</h1>
                <div className="expense-item__price">${expense}</div>
            </div>
            <button onClick={clickHandler}>Change Expense</button>
        </Card>
    );
}

export default ExpenseItem;
