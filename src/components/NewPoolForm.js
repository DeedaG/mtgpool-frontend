import React from 'react'
import { updateNewPoolForm } from '../actions/newPoolForm.js'
import { connect } from 'react-redux'


const NewPoolForm = ({ formData, updateNewPoolForm, history, userId, pool, handleSubmit, editMode }) => {
  const { name, pool_amount, loans } = formData

  const handleChange = event => {
    const { name, value } = event.target
    updateNewPoolForm(name,value)
  }


  return (
    <form onSubmit = {event => handleSubmit(event, formData, userId, history)}>
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
      <select
        onChange={handleChange}
        placeholder="investor"
         name="investor_id">
          <option value={1}>Fancy Bank</option>
          <option value={2}>Investor</option>
        >
      </select>
       <br/>
      <input
        type="submit"
        value={editMode ? "Update Pool" : "Create Pool"}
        />
    </form>
  )};

const mapStateToProps = state => {
    // debugger
  const userId = state.currentUser ? state.currentUser.id : ""
    return {
      formData: state.newPoolForm,
      userId
  }
}

export default connect(mapStateToProps, { updateNewPoolForm })(NewPoolForm);
