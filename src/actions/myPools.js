import { resetNewPoolForm } from './newPoolForm'
// import { addLoansToPool } from './loans'

export const setMyPools = pools => {
  return {
    type: "SET_MY_POOLS",
    pools
  }
}


export const clearMyPools = () => {
  return {
    type: "CLEAR_MY_POOLS"
  }
}

export const addPool = pool => {
  return {
    type: 'ADD_POOL',
    pool
  }
}


export const deletePoolSuccess = poolId => {
  return {
    type: 'DELETE_POOL',
    poolId
  }
}


export const updatePoolSuccess = pool => {
  return {
    type: 'UPDATE_POOL',
    pool
  }
}

// async actions

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

export const createPool = ( poolData, history, userId ) => {
  return dispatch => {
    console.log(poolData)
    const sendablePoolData = {
        name: poolData.name,
        pool_amount: poolData.pool_amount,
        investor_id: poolData.investor_id,
        user_id: poolData.userId,
        loans: poolData.loans
    }
    return fetch('http://localhost:3000/api/v1/pools', {
      credentials: 'include',
      method: 'POST',
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify(sendablePoolData)
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      }else {
      dispatch(addPool(resp.data))
      dispatch(resetNewPoolForm())
      history.push(`/pools/${resp.data.id}`)
     }
    })
  }
}

export const updatePool = ( poolData, history ) => {
  return dispatch => {
    console.log(poolData)
    const sendablePoolData = {
        id: poolData.id,
        name: poolData.name,
        pool_amount: poolData.pool_amount,
        investor_id: poolData.investor_id,
        loans: poolData.loans
    }
    return fetch(`http://localhost:3000/api/v1/pools/${poolData.poolId}`, {
      credentials: 'include',
      method: 'PATCH',
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify(sendablePoolData)
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      }else {
      dispatch(updatePoolSuccess(resp.data))
      history.push(`/pools/${resp.data.id}`)
     }
    })
  }
}

export const deletePool = (poolId, history) => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/pools/${poolId}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(deletePoolSuccess(poolId))
          history.push(`/pools`)
        }
      })
      .catch(console.log)
  }
}
