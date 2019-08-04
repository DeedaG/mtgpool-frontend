import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import { addLoansToPool } from '../actions/loans.js'


const MyLoans = ({loans}) => {


  const loanCards =  loans.length > 0 ? loans.map(loan =>

    	<><Link to ={`/loans/${loan.id}/edit`} key={loan.attributes.id}>
          {loan.attributes.borrower} - ${loan.attributes.amount}
          - {loan.attributes.rate}% - {loan.attributes.term}yr - Pool id:{loan.attributes.pool_id}
        </Link><br></br><br></br></>) : null

  return (
    // pooledLoans
    loanCards

  )
}

  const mapStateToProps = state => {

    return {
      loans: state.loans

    }
  }

export default connect(mapStateToProps)(MyLoans)
