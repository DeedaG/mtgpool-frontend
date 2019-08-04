import React from 'react'
import { createPool } from '../actions/myPools.js'
import { connect } from 'react-redux'
import NewPoolForm from '../components/NewPoolForm.js'

const NewPoolContainer = ({ history, createPool }) => {

  const handleSubmit = (formData, userId) => {
    createPool({
      ...formData,
      userId
    }, history)
  }
  return <NewPoolForm history={history} handleSubmit={handleSubmit} />
};

export default connect(null, {createPool })(NewPoolContainer);
