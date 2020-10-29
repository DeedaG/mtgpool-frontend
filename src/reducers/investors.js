   const initialState = []

   export default (state = [], action) => {
     switch(action.type) {
       case "SET_MY_INVESTORS":
         return action.investors
       case "ADD_INVESTOR":
         return state.concat(action.investor)
       case "UPDATE_INVESTOR":
         return state.map(investor => investor.id === action.investor.id ? action.investor : investor)
       case "DELETE_INVESTOR":
         return state.filter(investor => investor.id === action.investorId ? false : true)
       case "CLEAR_MY_INVESTORS":
         return initialState

       default:
           return state
       }
     }
