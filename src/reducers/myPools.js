const initialState = []

export default (state = [], action) => {
  switch(action.type) {
    case "SET_MY_POOLS":
      return action.pools
    case "ADD_POOL":
      return state.concat(action.pool)
    case "UPDATE_POOL":
      return state.map(pool => pool.id === action.pool.id ? action.pool : pool)

    case "DELETE_POOL":
      return state.filter(pool => pool.id === action.poolId ? false : true)
    case "CLEAR_MY_POOLS":
      return initialState

    default:
        return state
    }
  }
