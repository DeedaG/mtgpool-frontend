import React from 'react'
import { Link } from 'react-router-dom'
// import Comment from './Comment.js'


const PoolCard = ({pool, investors}) => {

  return (
    pool ?
    <div>
      Pool Name:<p style={{color: "black"}} className="poolName">{pool.attributes.name}</p>
    Pool Amount: <p style={{color: "black"}} className="poolName">${pool.attributes.pool_amount.toFixed(2)}</p>
    Investor: <p style={{color: "black"}} className="poolName">{pool.attributes.investor_id}</p>
  Commited Loan Amounts:
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
            <tbody > {pool.attributes.loans.map((loan) => (
              <tr key={loan.id}>
                <td>{loan.id}</td>
                <td>{loan.borrower}</td>
                <td>${loan.amount.toFixed(2)}</td>
                <td>{loan.rate}%</td>
                <td>{loan.term}yr</td>
              </tr>))}
           </tbody>
        </table>
        <br></br>
        <Link className="button2" to={`/pools/${pool.id}/edit`} >Edit this pool</Link><br></br>
        <br></br>
        <Link className="button1" to={`/loans`}>Browse More Loans</Link><br></br><br></br>
    </div> :
    null
  )
}



export default (PoolCard);
