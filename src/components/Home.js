import React from 'react';
// import Login from './Login.js'
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <h4>Welcome, please <Link to="/login"> Log In </Link> </h4>
  </div>
)
export default Home;
