// import { addPool } from './myPools.js'

export const setMyLoans = loans => {
  return {
    type: "SET_MY_LOANS",
    loans
  }
}

// export const addLoansToPool = (loan) => {
//   return {
//     type: 'ADD_LOANS_TO_POOL',
//     payload: loan
//   })
// }


export const getMyLoans = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/loans",
    {
      credentials: "include",
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setMyLoans(response.data))
        }
      })
      .catch(console.log)
  }

}
