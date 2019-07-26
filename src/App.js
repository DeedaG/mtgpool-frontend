import React from 'react';
import NavBar from './components/NavBar.js';
import MainContainer from './components/MainContainer.js';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser} from './actions/currentUser.js'


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
    }


  render() {
    return (
      <div className="App">
        <NavBar/>
        <MainContainer/>
      </div>


    // <Footer/>
    );
 }
}

// only calling one piece from state, incoming arguemnt is an argument coming from redux
// property called currentUser


export default connect(null, { getCurrentUser })(App);
