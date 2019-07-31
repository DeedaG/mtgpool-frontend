import React from 'react'

const LoanCard = ({loan}) => {
  return (
    loan ?
    <div>
      <h3>{loan.borrower}</h3>
      <p>{loan.amount}</p>
      <p>{loan.term}</p>
      <p>{loan.rate}</p>
      <p>{loan.close_date}</p>
    </div> :
    null
  )
}

export default LoanCard
