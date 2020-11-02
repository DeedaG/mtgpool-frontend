const initialState = {
  borrower: "",
  term: "",
  amount: "",
  rate: "",
  pool_id: "",
  close_date: ""
}

export default (state=initialState, action) => {

  switch (action.type) {
    case 'UPDATE_NEW_LOAN_FORM':
      return {
        ...state,
        [action.formData.name]: action.formData.value }
    case 'RESET_NEW_LOAN_FORM':
      return initialState
    case "SET_FORM_DATA_FOR_EDITLN":
        return action.loanFormData
    default:
      return state
  }
}
