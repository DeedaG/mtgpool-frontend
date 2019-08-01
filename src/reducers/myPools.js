const initialState = []

export default (state = [], action) => {
  switch(action.type) {
    case "SET_MY_POOLS":
      return action.pools
    case "ADD_POOL":
      return state.concat(action.pool)
      case "UPDATE_POOL":
        return state
    case "CLEAR_MY_POOLS":
      return initialState

    default:
        return state
    }
  }
