const initialState = {
  name: "",
  pool_amount: "",
  investor_id: ""
}

export default (state=initialState, action) => {
  switch (action.type) {
    case 'UPDATE_NEW_POOL_FORM':
    // debugger
      return {
        ...state,
        [action.formData.name]: action.formData.value }
    case 'RESET_NEW_POOL_FORM':
      return initialState
    default:
      return state
  }
}
