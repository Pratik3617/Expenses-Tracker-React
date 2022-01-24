import React,{useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./ExpenseInput.css";

const ExpenseInput = (props) => {

  const [editing, setEditing] = useState(false);

    const startEditingHandler=()=>{
        setEditing(true);
    }
    const stopEditingHandler=()=>{
      setEditing(false);
    }

  const saveExpenseDataHandler=(enteredExpenseData)=>{
    const expenseData={
      ...enteredExpenseData,
      id:Math.random().toString()
    }
    props.onAddExpense(expenseData)
    setEditing(false);
  }

  return (
    <div className="new-expense">
      {!editing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {editing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelClick={stopEditingHandler}/>}
    </div>
  );
};

export default ExpenseInput;
