import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import { addLoansToPool } from '../actions/loans.js'


const MyLoans = ({loans, loan, pools}) => {

  const loanCards =  loans.length > 0 ? loans.map(loan =>

    	<li key = {loan.id}><><Link to ={`/loans/${loan.id}/edit`} key={loan.attributes.id}>
          {loan.attributes.borrower} - ${loan.attributes.amount}
          - {loan.attributes.rate}% - {loan.attributes.term}yr -
          Pool: {pools.filter(pool => pool.attributes.id === loan.attributes.pool_id).map(p => p.attributes.name)}
        </Link><br></br><br></br></></li>) : null

  return (
    loanCards
  )
}

  const mapStateToProps = state => {

    return {
      loans: state.loans,
      pools: state.myPools

    }
  }

export default connect(mapStateToProps)(MyLoans)
