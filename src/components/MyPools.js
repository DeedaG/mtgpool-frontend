import React from 'react'
import { connect } from 'react-redux'
// import PoolCard from './PoolCard.js'
import { Link } from 'react-router-dom'


const MyPools = props => {
  const poolCards = props.pools.length > 0 ? props.pools.map(p =>
   <><Link key={p.id} to ={`/pools/${p.id}`} >{p.attributes.name}</Link>
      <br></br><br></br></>) : null
  return (
    poolCards
  )
}

const mapStateToProps = state => {
  // debugger
  return {
    pools: state.myPools
    // loans: state.loans
  }
}

export default connect(mapStateToProps)(MyPools)
