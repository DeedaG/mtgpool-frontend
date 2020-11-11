import React from 'react'
import { updateNewPoolForm } from '../actions/newPoolForm.js'
import { connect } from 'react-redux'
import LoanCheckbox from './LoanCheckbox.js'
import InvestorCheckbox from './InvestorCheckbox.js'


const NewPoolForm = ({ formData, updateNewPoolForm, allLoans, pool, userId, handleSubmit, editMode }) => {
  const { name, pool_amount } = formData

  const handleChange = (event) => {
    const {name, value} = event.target
    // const findLoan = allLoans.filter(l => l.id === event.target.value)
    // const addLoans = formData.loans.concat(findLoan)
    // event.target.name === "loan.id" ?
    //     updateNewPoolForm("loans", formData.loans)
        // :
        updateNewPoolForm(name, value)
      }

  return (

    <form onSubmit = {event => {
      event.preventDefault()
      handleSubmit(formData, userId);}}>
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
