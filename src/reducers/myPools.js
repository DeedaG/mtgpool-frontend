export default (state = [], action) => {
  switch(action.type) {
    case "SET_MY_POOLS":
      return action.pools
    default:
        return state
    }
  }
