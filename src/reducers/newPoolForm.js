const initialState = {
  name: "",
  pool_amount: "",
}

export default (state=initialState, action) => {
  switch (action.type) {
    case 'UPDATE_NEW_POOL_FORM':
      return {
        ...state,
        [action.formData.name]: action.formData.value }
    case 'RESET_NEW_POOL_FORM':
      return initialState
    default:
      return state
  }
}
