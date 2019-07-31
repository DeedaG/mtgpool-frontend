import React from 'react'
import { connect } from 'react-redux'
// import PoolCard from './PoolCard.js'
import { Link } from 'react-router-dom'


const MyPools = props => {
  const poolCards = props.pools.length > 0 ? props.pools.map(p =>
   <Link to ={`/pools/${p.id}`} key={p.id}>{p.attributes.name}</Link>) : null
  return (

    poolCards

  )
}

const mapStateToProps = state => {
  return {
    pools: state.myPools
  }
}

export default connect(mapStateToProps)(MyPools)
