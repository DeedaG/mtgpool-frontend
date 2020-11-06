import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const MyLoans = ({loans, pools, currentUser}) => {

  const addLoan = <Link to ={`/loans/new`}>Add Loans</Link>

    const findpool = (x) => {
      return pools.length > 0 ?
        pools.filter(p =>
        p.id === x.toString())
        .map(pl =>
          <Link key={pl.id} style={{color: "red"}} to ={`/pools/${pl.id}`}>{pl.attributes.name}</Link>)
            : <span style={{color: "green"}}>Available</span>
}

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
            <Link to ={`/loans/${loan.id}`} key={loan.attributes.id} style={{color: "green"}}>
              {loan.attributes.borrower}
            </Link>
          </td>
          <td>${numberWithCommas(loan.attributes.amount.toFixed(2))}</td>
          <td>{loan.attributes.rate}%</td>
          <td>{loan.attributes.term}yr</td>
          <td>{(loan.attributes.pool_id && findpool(loan.attributes.pool_id).length > 0) ?
                findpool(loan.attributes.pool_id)
                : <span style={{color: "green"}}>Available</span>
              }</td>
        </tr>
      </tbody>
    </table>): null

  return (
    <div>
      <button className ="button2 ">{addLoan}</button>
      <br></br><br></br>
      {loanCards}
    </div>
  )
}

  const mapStateToProps = state => {
    return {
      currentUser: state.currentUser ? state.currentUser : null,
      loans: state.loans,
      pools: state.myPools

    }
  }

export default connect(mapStateToProps)(MyLoans)
