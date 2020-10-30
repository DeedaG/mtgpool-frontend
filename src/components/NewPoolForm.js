import React from 'react'
import { updateNewPoolForm } from '../actions/newPoolForm.js'
import { connect } from 'react-redux'
import LoanCheckbox from './LoanCheckbox.js'
import InvestorCheckbox from './InvestorCheckbox.js'


const NewPoolForm = ({ formData, updateNewPoolForm, userId, handleSubmit, editMode }) => {
  const { name, pool_amount } = formData

  const handleChange = event => {
    const { name, value } = event.target
    updateNewPoolForm(name,value)
  }
debugger
  return (

    <form onSubmit = {event => {
      event.preventDefault()
      handleSubmit(formData, userId)}}>
      <br></br>
      <input
        placeholder="name"
        name="name"
        onChange={handleChange}
        value={name}
      /><br/>
      <input
        placeholder="pool amount"
        name="pool_amount"
        onChange={handleChange}
        value={pool_amount}
      /><br/>
      <label>Choose Investor:</label><br/>
      <InvestorCheckbox/>
      <br></br>
      <label>Choose Loans:</label><br/>
      <LoanCheckbox/>
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
      loans: state.newPoolForm.loans
  }
}

export default connect(mapStateToProps, { updateNewPoolForm })(NewPoolForm);
