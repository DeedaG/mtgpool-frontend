import React from 'react'
import { updateNewPoolForm } from '../actions/newPoolForm.js'
import { connect } from 'react-redux'


const NewPoolForm = ({ formData, updateNewPoolForm, userId, pool, handleSubmit, editMode }) => {
  const { name, pool_amount } = formData

  const handleChange = event => {
    const { name, value } = event.target
    updateNewPoolForm(name,value)
  }

  return (

    <form onSubmit = {event => {
      event.preventDefault()
      handleSubmit(formData)}}>
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
      <select
        onChange={handleChange}
        placeholder="investor"
        name="investor_id">
          <option value={1}>Fancy Bank</option>
          <option value={2}>Slick Investor</option>
          <option value={3}>Investor</option>
          <option value={4}>MoneyTree</option>
        >
      </select>
        <br></br>
          <input
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
      // loans: state.loans
  }
}

export default connect(mapStateToProps, { updateNewPoolForm })(NewPoolForm);
