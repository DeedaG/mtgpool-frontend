import React from 'react'
import { createInvestor } from '../actions/investors.js'
import { connect } from 'react-redux'
import MyInvestors from '../components/MyInvestors.js'
import NewInvestorForm from '../components/NewInvestorForm.js'

const NewInvestorContainer = ({ history, createInvestor }) => {

  const handleSubmit = (formData) => {
    createInvestor({
      ...formData
    }, history)
  }

  return <>
      <NewInvestorForm history={history} handleSubmit={handleSubmit} />
      <br/>
      <MyInvestors history={history}/>
    </>
};

export default connect(null, {createInvestor })(NewInvestorContainer);
