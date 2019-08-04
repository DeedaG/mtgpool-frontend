const initialState = {
      id: "",
    name: "",
    pool_amount: "",
    investor_id: "",
    loans: ""
}

export default (state=initialState, action) => {

  switch (action.type) {
    case 'UPDATE_NEW_POOL_FORM':
      return {
        ...state,
        [action.formData.name]: action.formData.value }
    case 'RESET_NEW_POOL_FORM':
      return initialState
    case "SET_FORM_DATA_FOR_EDIT":
        return action.poolFormData

    default:
      return state
  }
}
