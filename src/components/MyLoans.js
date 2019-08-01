import React from 'react'
import { connect } from 'react-redux'
// import LoanCard from './LoanCard.js'

const MyLoans = (props) => {
   console.log(props)
  const loanList =  props.loans.map((loan) => (
    	<div key={loan.attributes.id}>{loan.attributes.borrower} - ${loan.attributes.amount}
        - {loan.attributes.rate}% - {loan.attributes.term}yr - Pool id:{loan.relationships.pool.data.id}
      </div>
    ))

  return (
    props.loans.length > 0 ?
     ( <strong>No Loans.</strong> ) : null,

    loanList
  )
}


  const mapStateToProps = state => {
    return {
      loans: state.loans
    }
  }

export default connect(mapStateToProps)(MyLoans)
