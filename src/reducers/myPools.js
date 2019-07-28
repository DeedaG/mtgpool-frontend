export default (state = [], action) => {
  switch(action.type) {
    case "SET_MY_POOLS":
      return action.pools
    case "CLEAR_MY_POOLS":
      return []
    default:
        return state
    }
  }
