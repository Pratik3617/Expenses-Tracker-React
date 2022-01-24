import React ,{useState} from 'react';
import "./ExpenseForm.css"

const ExpenseForm=(props)=> {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');       
    const [enteredDate, setEnteredDate] = useState('');        


    // for using multiple state u can do in this way as well or u can use another way mentioned above 
    
    // const [userInput,setUserInput]=useState({            2nd way
    //     enteredTitle:'',                                
    //     enteredAmount:'',                                
    //     enteredDate:''
    // })

    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);    

        // setUserInput({              by using 2nd way
        //     ...userInput,                            ****whenever u update your state and depend on previous state ushould not do it like this
        //     enteredTitle:event.target.value
        // })

        // instead you can do it like this
        // setUserInput((prevState)=>{
        //     return {...prevState,enteredTitle:event.target.value};
        // })

    };

    const AmountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
        // setUserInput((prevState)=>{
        //     return {...prevState,enteredAmount:event.target.value};
        // })
    };

    const DateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
        // setUserInput((prevState)=>{
        //     return {...prevState,enteredDate:event.target.value};
        // })
    };

    const submithandler=(event)=>{
        event.preventDefault();   // since on form submission due its default behaviour page gets reloaded so to stop this we use this command 
                                    // which is javascript command
        const expenseData={
            title:enteredTitle,
            amount:+ enteredAmount,
            date : new Date(enteredDate),
        }

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');            // to make input blank after form submission
        setEnteredAmount('');
        setEnteredDate('');
    }

    // Since we want to remove the data in the inputs after form submission therefore we will pass the state variables in value attribute of input

  return (
  <form onSubmit={submithandler}>

        <div>
            <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>  
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={AmountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={enteredDate} min="2020-01-01" max="2022-12-31" onChange={DateChangeHandler}/>
            </div>
            </div>
        
            <div className='new-expense__actions justify' >
                <div>
                    <button onClick={props.onCancelClick}>Cancel</button>
                </div>

                <div>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </div>
        
  </form>
  );
}

export default ExpenseForm;
