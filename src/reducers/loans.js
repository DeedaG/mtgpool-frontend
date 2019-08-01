
export default (state = [], action) => {
  // const newLoan = action.loan;
  switch(action.type) {
    case "SET_MY_LOANS":
      return action.loans

    default:
        return state
    }
  }
