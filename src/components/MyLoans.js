import React from 'react'
import { connect } from 'react-redux'
// import LoanCard from './LoanCard.js'


const MyLoans = (props) => {
  console.log(props)
  const loanList =  props.loans.map((loan) => (
    	<div key={loan.attributes.id}>{loan.attributes.borrower} - ${loan.attributes.amount}
        - {loan.attributes.rate}% - {loan.attributes.term}yr
      {props.onAddClick ? ( <button onClick={() => props.onAddClick(loan)}>Add</button> ) : null }
      {props.onRemoveClick ? ( <button onClick={() => props.onRemoveClick(loan.id)}>Remove</button> ) : null }
      </div>
    ))


  return (
    props.loans.length > 0 ?
     ( <strong>No Loans.</strong> ) : null,

    loanList
  )
}


const mapStateToProps = state => {
   // debugger
  return {
    loans: state.loans
  }
}

export default connect(mapStateToProps)(MyLoans)
