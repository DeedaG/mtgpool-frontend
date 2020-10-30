import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import { addLoansToPool } from '../actions/loans.js'


const MyLoans = ({loans, pools}) => {

  const loanPool = pools.length > 0 ? pools.map(p =>
    <td>
      <Link to ={`/pools/${p.id}`} key={p.attributes.id} style={{color: "green"}}>
        {p.attributes.name}
      </Link>
    </td>) : null

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  const loanCards =  loans.length > 0 ? loans.map(loan =>
    <table className="loans" key = {loan.id}>
      <thead>
        <tr>
          <th className="loanTextLeft">Borrower Name</th>
          <th className="loanTextLeft">Loan Amount</th>
          <th className="loanTextLeft">Interest Rate</th>
          <th className="loanTextLeft">Term</th>
          <th className="loanTextRight">Pool</th>
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
          <td>{loanPool && loan.attributes.pool_id?
              loanPool.filter(p => p.props.children.key === loan.attributes.pool_id.toString()).length > 0
              ? loanPool.filter(p => p.props.children.key === loan.attributes.pool_id.toString())
              : "not committed"
                : null}
          </td>
        </tr>
      </tbody>
    </table>): null

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
