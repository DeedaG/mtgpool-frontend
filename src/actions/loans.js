import { resetNewLoanForm } from './newLoanForm'

export const setMyLoans = loans => {
  return {
    type: "SET_MY_LOANS",
    loans
  }
}

export const clearMyLoans = () => {
  return {
    type: "CLEAR_MY_LOANS"
  }
}

export const addLoan = loan => {
  return {
    type: 'ADD_LOAN',
    loan
  }
}


export const deleteLoanSuccess = loanId => {
  return {
    type: 'DELETE_LOAN',
    loanId
  }
}


export const updateLoanSuccess = loan => {
  return {
    type: 'UPDATE_LOAN',
    loan
  }
}

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

export const createLoan = ( loanData, history ) => {
  return dispatch => {
    const sendableLoanData = {
      borrower: loanData.borrower,
      term: loanData.term,
      amount: loanData.amount,
      rate: loanData.rate,
      pool_id: loanData.pool_id,
      close_date: loanData.close_date
    }
    return fetch('http://localhost:3000/api/v1/loans', {
      credentials: 'include',
      method: 'POST',
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify(sendableLoanData)
    })
    .then(r => r.json())
    .then(resp => {
      console.log("newLoanresp", resp)
      if (resp.error) {
        alert(resp.error)
      }else {
      dispatch(addLoan(resp.data))
      dispatch(resetNewLoanForm())
      history.push(`/loans/${resp.data.id}`)
     }
    })
  }
}

export const updateLoan = ( loanData, history ) => {
  return dispatch => {
    const sendableLoanData = {
        id: loanData.id,
        borrower: loanData.borrower,
        term: loanData.term,
        amount: loanData.amount,
        rate: loanData.rate,
        pool_id: loanData.pool_id,
        close_date: loanData.close_date
    }
    return fetch(`http://localhost:3000/api/v1/loans/${loanData.loanId}`, {
      credentials: 'include',
      method: 'PATCH',
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify(sendableLoanData)
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      }else {
      dispatch(updateLoanSuccess(resp.data))
      history.push(`/loans/${resp.data.id}`)
     }
    })
  }
}

export const deleteLoan = (loanId, history) => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/loans/${loanId}`, {
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
          dispatch(deleteLoanSuccess(loanId))
          history.push(`/loans`)
        }
      })
      .catch(console.log)
  }
}
