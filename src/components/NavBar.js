import React from 'react'
import Login from "./Login.js"
import Logout from "./Logout.js"
import { connect } from 'react-redux'


  const NavBar = ( { currentUser }) => {
    return (
      <div className="NavBar">
        { currentUser ? <strong>Welcome, {currentUser.attributes.username}</strong> : "" }
        { currentUser ? <Logout /> : <Login /> }
      </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(NavBar)
