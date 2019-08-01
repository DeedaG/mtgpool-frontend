import React from 'react'
import { Link } from 'react-router-dom'

const PoolCard = ({pool, loan}) => {
  return (
    pool ?
    <div>
      Pool Name:<h3>{pool.attributes.name}</h3>
      Pool Amount: <p>{pool.attributes.pool_amount}</p>
    Investor: <p>{pool.attributes.investor_id}</p>
    Commited Loan Amounts:  <p>{pool.attributes.loans.map((loan) => (
          <li>{loan.amount}</li> ))}</p>

      <Link to={`/pools/${pool.id}/edit`}>Edit this pool</Link><br></br>
      <Link to={'/loans'}>Browse Loans</Link>
    </div> :
    null
  )
}

export default PoolCard
