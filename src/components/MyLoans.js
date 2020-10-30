import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import { addLoansToPool } from '../actions/loans.js'


const MyLoans = ({loans, pools}) => {

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  const loanCards =  loans.length > 0 ? loans.map(loan =>
    <table className="pools" key = {loan.id}>
      <thead>
        <tr>
          <th>Borrower Name</th>
          <th>Loan Amount</th>
          <th>Interest Rate</th>
          <th>Term</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Link to ={`/loans/${loan.id}/edit`} key={loan.attributes.id} style={{color: "green"}}>
              {loan.attributes.borrower}
            </Link></td>
          <td>${numberWithCommas(loan.attributes.amount.toFixed(2))}</td>
          <td>{loan.attributes.rate}%</td>
          <td>{loan.attributes.term}yr</td>
        </tr>
      </tbody>
    </table>
        //   Pool: {pools.filter(pool => pool.attributes.id === loan.attributes.pool_id).map(p => p.attributes.name)}
        // </Link><br></br><br></br></></li>
      )
        : null

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
