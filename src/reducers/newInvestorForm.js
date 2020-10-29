const initialState = {
    name: "",
    fee: ""
}

export default (state=initialState, action) => {

  switch (action.type) {
    case 'UPDATE_NEW_INVESTOR_FORM':
      return {
        ...state,
        [action.formData.name]: action.formData.value }
    case 'RESET_NEW_INVESTOR_FORM':
      return initialState
    case "SET_FORM_DATA_FOR_EDITINV":
        return action.investorFormData
debugger
    default:
      return state
  }
}
