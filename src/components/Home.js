import React from 'react';
// import Login from './Login.js'
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <br></br>
    <br></br>
    <h3>Welcome </h3>
    <div>
      <Link to="/signup">
        <h4 style={{color: "white"}}>Sign up here</h4>
      </Link>
    </div>
    <Link to="/login"><h4 style={{color: "white"}}> Log In</h4> </Link>

  </div>
)
export default Home;
