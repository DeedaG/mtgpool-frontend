import React from 'react'
import { connect } from 'react-redux'
import PoolCard from './PoolCard.js'

const MyPools = props => {
  const poolCards = props.pools.length > 0 ? props.pools.map
    (p => <PoolCard pool={p} key={p.attributes.id} />) : null
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
