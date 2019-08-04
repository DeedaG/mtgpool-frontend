import React from 'react'
import { connect } from 'react-redux'


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

const mapStateToProps = state => {
  const poolId = state.loans.pool_id
  // debugger
  return {
    // pools: state.myPools,
    poolId

  }
}

export default connect(mapStateToProps)(LoanCard);
