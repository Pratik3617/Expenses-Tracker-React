import ExpenseItem from './ExpenseItem';
import "./NewExpensesItem.css"
import Card from "../UI/Card"
import ExpensesFilter from './ExpensesFilter';
import React,{useState} from 'react'
import ExpensesChart from './ExpensesChart';

export default function NewExpensesItem(props) {   // here card will work as a shell

  const [filteredYear, setFilteredYear] = useState('2019');

  const filterChangeHandler=(selectedYear)=>{
    setFilteredYear(selectedYear);
  }

  const filteredExpenses=props.items.filter((ele)=>{
    return ele.date.getFullYear().toString()===filteredYear;
  })

  

  return (
    
      <Card className='expenses'> 
      
        <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}/>
        <ExpensesChart expenses={filteredExpenses}/>
        { filteredExpenses.length===0 ? <p>No expenses found.</p> : filteredExpenses.map((element)=>{
              return <ExpenseItem key={element.id} title={element.title} date={element.date} amount={element.amount}/>
        })}
    
      </Card>
      
  );
}
