const initialState = []

export default (state = [], action) => {
  switch(action.type) {
    case "SET_MY_POOLS":
      return action.pools
    case "ADD_POOL":
      return state.pools.concat(action.pools)
    case "CLEAR_MY_POOLS":
      return initialState
    default:
        return state
    }
  }
