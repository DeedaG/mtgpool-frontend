import React from 'react'


const LoanCard = ({loan}) => {
  return (
    loan ?
    <div>
      Borrower:<h3>{loan.attributes.borrower}</h3>
      Loan Amount: <p>{loan.attributes.amount}</p>
    Pool Id: <p>{loan.attributes.pool_id}</p>

      </div> : null

    )
}


export default LoanCard;
