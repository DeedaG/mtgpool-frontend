import React from 'react'
import { useAlert } from 'react-alert'
import NewInvestorForm from './NewInvestorForm.js'

const InvestorAlert = () => {
  const alert = useAlert()
  const show = () => {
    alert.show('Name and Fee required!')
  }

  return (
    <NewInvestorForm>{show}</NewInvestorForm>
  )
}

export default InvestorAlert
