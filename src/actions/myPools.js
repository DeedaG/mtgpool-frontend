
export const setMyPools = pools => {
  return {
    type: "SET_MY_POOLS",
    pools
  }
}

export const getMyPools = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/pools",
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
          dispatch(setMyPools(response.data))
        }
      })
      .catch(console.log)
  }
}
