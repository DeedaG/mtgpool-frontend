import React from 'react'
import { updateNewPoolForm } from '../actions/newPoolForm.js'
import { connect } from 'react-redux'

const NewPoolForm = ({ name, pool_amount }) => {

  const handleChange = event => {
    const { name, value } = event.target
    updateNewPoolForm(name,value)
  }

  const handleSubmit = event => event.preventDefault()

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
        value={name}
      /><br/>
      <input
        type="submit"
        value="Create Pool"
        />

    </form>
  )};

const mapStateToProps = state => {
    const { name, pool_amount } = state.newPoolForm
    return {
      name,
      pool_amount
  }
}

export default connect(mapStateToProps, { updateNewPoolForm })(NewPoolForm);
