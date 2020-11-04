import React from 'react'
import { Link } from 'react-router-dom'
// import Comment from './Comment.js'


const PoolCard = ({pool, investor}) => {

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    pool ?
    <div>
      <h3><table className="pools">
        <thead>
          <tr>
            <th>Pool Name</th>
            <th>Pool Amount</th>
            <th>Investor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{pool.attributes.name}</td>
            <td>${numberWithCommas(pool.attributes.pool_amount.toFixed(2))}</td>
            <td>
              { investor ?
                <Link to ={`/investors/${investor.id}/edit`} style={{color: "green"}}>
                  {investor.attributes.name}</Link>
                : null
            }
            </td>
          </tr>
        </tbody>
      </table></h3>

  <h3>Commited Loan Amounts:</h3>
          <table style={{color: "black"}} className="pools">
            <thead>
              <tr>
                <th>Loan #</th>
                <th>Borrower</th>
                <th>Loan Amount</th>
                <th>Interest Rate</th>
                <th>Term</th>
              </tr>
          </thead>
            <tbody >{pool.attributes.loans.map((loan) => (
              <tr key={loan.id}>
                <td>{loan.id}</td>
                <td>{loan.borrower}</td>
                <td>${numberWithCommas(loan.amount.toFixed(2))}</td>
                <td>{loan.rate}%</td>
                <td>{loan.term}yr</td>
              </tr>))}
           </tbody>
        </table>
        <br></br>
        <Link className="button3" to={`/pools/${pool.id}/edit`} >Edit this pool</Link><br></br>
        <br></br>
        <Link className="button2" to={`/loans`}>Browse Loans</Link><br></br><br></br>
    </div> :
    null
  )
}

export default (PoolCard);
