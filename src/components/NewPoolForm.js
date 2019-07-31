import React from 'react'
import { updateNewPoolForm } from '../actions/newPoolForm.js'
import { createPool } from '../actions/myPools.js'
import { connect } from 'react-redux'


const NewPoolForm = ({ formData, updateNewPoolForm, createPool, history, userId }) => {
  const { name, pool_amount } = formData

  const handleChange = event => {
    const { name, value } = event.target
    updateNewPoolForm(name,value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    createPool({
      ...formData,
      userId
    }, history)
  }


  return (
    <form onSubmit = {handleSubmit}>
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
        value="Create Pool"
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

export default connect(mapStateToProps, { updateNewPoolForm, createPool })(NewPoolForm);
