import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Logout from './Logout.js'


  const NavBar = ( { currentUser, loggedIn }) => {
    return (
      <div className="NavBar">
        <NavLink exact activeClassName="active" to="/pools">My Pools</NavLink>
        &nbsp;
        <NavLink exact activeClassName="active" to="/pools/new">New Pool</NavLink>
        &nbsp;
        <NavLink exact activeClassName="active" to="/investors">Investors</NavLink>
          &nbsp;
          <NavLink exact activeClassName="active" to="/loans">Loans</NavLink>
        { loggedIn ? <Logout /> : null}
    </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(NavBar)
