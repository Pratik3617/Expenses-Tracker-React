import React from 'react';
import "./ExpensesFilter.css"

export default function ExpensesFilter(props) {

    const filterChangeHandler=(event)=>{
        props.onFilterChange(event.target.value);
    }

  return (<div>
      <div className="expenses-filter">
          <div className="expenses-filter__control">
              <label>Filter by Year</label>
              <select value={props.selected} onChange={filterChangeHandler}>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>

              </select>
          </div>
      </div>
  </div>);
}
