export const setMyInvestors = investors => {
  debbuggers
  return {
    type: "SET_MY_INVESTORS",
    investors
  }
}

export const getMyInvestors = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/investors",
    {
      credentials: "include",
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(r => r.json())
      .then(response => {
        console.log("response", response)
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setMyInvestors(response.data))
        }
      })
      .catch(console.log)
  }

}
