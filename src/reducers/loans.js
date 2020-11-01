const initialState = []

export default (state = [], action) => {

  switch(action.type) {
    case "SET_MY_LOANS":
      return action.loans
      case "ADD_LOAN":
        return state.concat(action.loan)
      case "UPDATE_LOAN":
        return state.map(loan => loan.id === action.loan.id ? action.loan : loan)
      case "DELETE_LOAN":
        return state.filter(loan => loan.id === action.loanId ? false : true)
      case "CLEAR_MY_LOANS":
        return initialState
    default:
        return state
    }
   }
