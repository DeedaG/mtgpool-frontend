import React from 'react'
import { createLoan } from '../actions/loans.js'
import { connect } from 'react-redux'
import MyLoans from '../components/MyLoans.js'
import AddLoans from '../components/AddLoans.js'

const NewLoanContainer = ({ history, createLoan }) => {

  const handleSubmit = (formData) => {
    createLoan({
      ...formData
    }, history)
  }

  return <>
      <AddLoans history={history} handleSubmit={handleSubmit} />
    </>
};

export default connect(null, {createLoan })(NewLoanContainer);
