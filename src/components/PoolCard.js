import React from 'react'
import { Link } from 'react-router-dom'

const PoolCard = ({pool}) => {
  return (
    pool ?
    <div>
      <h3>{pool.attributes.name}</h3>
      <p>{pool.attributes.pool_amount}</p>
      <Link to={`/pools/${pool.id}/edit`}>Edit this pool</Link><br></br>
      <Link to={'/loans'}>Add Loans</Link>
    </div> :
    null
  )
}

export default PoolCard
