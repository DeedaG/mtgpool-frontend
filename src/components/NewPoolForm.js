import React from 'react'
import { updateNewPoolForm } from '../actions/newPoolForm.js'
import { connect } from 'react-redux'
import LoanCheckbox from './LoanCheckbox.js'
import InvestorCheckbox from './InvestorCheckbox.js'


const NewPoolForm = ({ formData, updateNewPoolForm, allLoans, pool, userId, handleSubmit, editMode }) => {
  const { name, pool_amount } = formData

  const handleChange = (event) => {
    const {name, value} = event.target
        updateNewPoolForm(name, value)
      }

    const myAlert = (x) => {
        if (x !== "x"){
          console.log("x", x)
         alert("Pool details cannot be changed. Loans already committed");
         }
       }

  return (

    <form onSubmit = {event => {
      event.preventDefault()
      handleSubmit(formData, userId);}}>
      <br></br>
      <input
        required
        placeholder="name"
        name="name"
        onChange={editMode && formData.loans.length > 0 ? myAlert : handleChange}
        value={name}
      /><br/>
      <input
        required
        placeholder="pool amount"
        name="pool_amount"
        onChange={editMode && formData.loans.length > 0 ? myAlert : handleChange}
        value={pool_amount}
      /><br/>
    <label><h4>Choose Investor:</h4></label>
      <InvestorCheckbox/>
      <label><h4>Available Loans:</h4></label>
      <LoanCheckbox editMode handleChange={handleChange}/>
      <br></br>
        <input
          style={{height:"50px", width:"125px"}}
          className={editMode ? "button3" : "button2"}
          type="submit"
          value={editMode ? "Update Pool" : "Create Pool"}
        />
      </form>
  )};

const mapStateToProps = state => {
  const userId = state.currentUser ? state.currentUser.id : ""
    return {
      formData: state.newPoolForm,
      userId,
      allLoans: state.loans
  }
}

export default connect(mapStateToProps, { updateNewPoolForm })(NewPoolForm);
