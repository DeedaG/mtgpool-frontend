export const  updateNewLoanForm = (name, value) => {
  const formData = {name,value}
  return {
    type: "UPDATE_NEW_LOAN_FORM",
    formData
  }
}

export const  resetNewLoanForm = () => {
  return {
    type: "RESET_NEW_LOAN_FORM"
  }
}

export const setFormDataForEditLn = loan => {
  const loanFormData = {
    id: loan.id,
    borrower: loan.attributes.borrower,
    term: loan.attributes.term,
    amount: loan.attributes.amount,
    rate: loan.attributes.rate,
    pool_id: loan.attributes.pool_id,
    close_date: loan.attributes.close_date
  }

  return {
    type: "SET_FORM_DATA_FOR_EDITLN",
    loanFormData
  }
}
