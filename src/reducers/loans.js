
export default (state = [], action) => {

  switch(action.type) {
    case "SET_MY_LOANS":
      return action.loans

    default:
        return state
    }
   }
