import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import { addLoansToPool } from '../actions/loans.js'


const MyInvestors = ({investors, pools}) => {

  const investorCards =  investors.length > 0 ? investors.map(investor =>

    	<li key = {investor.id}><><Link to ={`/investors/${investor.id}/edit`} key={investor.attributes.id}>
          {investor.attributes.borrower} - ${investor.attributes.amount}
          - {investor.attributes.rate}% - {investor.attributes.term}yr -
          Pool: {pools.filter(pool => pool.attributes.id === investor.attributes.pool_id).map(p => p.attributes.name)}
        </Link><br></br><br></br></></li>) : null

  return (
    investorCards
  )
}

  const mapStateToProps = state => {
    return {
      investors: state.investors,
      pools: state.myPools

    }
  }

export default connect(mapStateToProps)(MyInvestors)
