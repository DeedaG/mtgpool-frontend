export default (state = [], action) => {

  switch(action.type) {
    case "SET_MY_INVESTORS":
      return action.investors

    default:
        return state
    }
   }
