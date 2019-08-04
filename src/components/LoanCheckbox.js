import React, { Component } from 'react'
import { addLoansToPool } from '../actions/loans.js'


const LoanCheckbox = ({ loans, pool, handleSubmit, updatePool, editMode, history }) => {
  // debugger
    const handleCheckbox = event => {
      console.log(event.target.checked, event.target.name);
      addLoansToPool(event.target.name)
    }

    return (
    <form onSubmit = {event => {
      event.preventDefault()
      handleSubmit(formData)}}>
      <label>Choose Loans</label><br/>
      <div>
       {loans.map(loan => (
           <><input

         name={loan.id}
         type="checkbox"
         key={loan.id}
         onChange={handleCheckbox}
         value={loan}
         id={loan}
       />{loan.attributes.amount}
       <br></br></>
       ))
     }
   </div>
   <br></br>
     <input
       type="submit"
       value={editMode ? "Update Pool" : "Create Pool"}
     />
 </form>
)};

}

export default LoanCheckbox
