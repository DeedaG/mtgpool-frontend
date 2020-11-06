import { resetNewInvestorForm } from './newInvestorForm'

export const setMyInvestors = investors => {
  return {
    type: "SET_MY_INVESTORS",
    investors
  }
}

export const clearMyInvestors = () => {
  return {
    type: "CLEAR_MY_INVESTORS"
  }
}

export const addInvestor = investor => {
  return {
    type: 'ADD_INVESTOR',
    investor
  }
}


export const deleteInvestorSuccess = investorId => {
  return {
    type: 'DELETE_INVESTOR',
    investorId
  }
}


export const updateInvestorSuccess = investor => {
  return {
    type: 'UPDATE_INVESTOR',
    investor
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
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setMyInvestors(response.data))
        }
      })
      .catch(console.log)
  }
}

export const createInvestor = ( investorData, history ) => {
  return dispatch => {
    const sendableInvestorData = {
        name: investorData.name,
        fee: investorData.fee
    }
    return fetch('http://localhost:3000/api/v1/investors', {
      credentials: 'include',
      method: 'POST',
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify(sendableInvestorData)
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      }else {
      dispatch(addInvestor(resp.data))
      dispatch(resetNewInvestorForm())
      history.push(`/investors/${resp.data.id}`)
     }
    })
  }
}

export const updateInvestor = ( investorData, history ) => {
  return dispatch => {
    const sendableInvestorData = {
        id: investorData.id,
        name: investorData.name,
        fee: investorData.fee
    }
    return fetch(`http://localhost:3000/api/v1/investors/${investorData.investorId}`, {
      credentials: 'include',
      method: 'PATCH',
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify(sendableInvestorData)
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      }else {
      dispatch(updateInvestorSuccess(resp.data))
      history.push(`/investors/${resp.data.id}`)
     }
    })
  }
}

export const deleteInvestor = (investorId, history) => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/investors/${investorId}`, {
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
          dispatch(deleteInvestorSuccess(investorId))
          history.push(`/investors`)
        }
      })
      .catch(console.log)
  }
}
