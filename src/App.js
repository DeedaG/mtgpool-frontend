import React from 'react';
import NavBar from './components/NavBar.js';
// import MainContainer from './components/MainContainer.js';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser} from './actions/currentUser.js'
import Login from './components/Login.js'
// import Logout from './components/Logout.js'
import MyPools from './components/MyPools.js'
import MyLoans from './components/MyLoans.js'
import PoolCard from './components/PoolCard.js'
import Home from './components/Home.js'
import NewPoolForm from './components/NewPoolForm.js'
import { Route, Switch, withRouter } from 'react-router-dom'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
    }


  render() {
    const { loggedIn, pools } = this.props
    return (
      <div className="App">
        { loggedIn ? <NavBar/> : <Home/> }
        <Switch>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/pools' component={MyPools}/>
          <Route exact path='/loans' component={MyLoans}/>
          <Route exact path='/pools/new' component={NewPoolForm}/>
          <Route exact path='/pools/:id' render={props => {
              const pool = pools.find(pool => pool.id === props.match.params.id)
                return <PoolCard pool={pool} {...props}/>
                }
              }/>
            <Route exact path='/pools/:id/edit' render={props => {
              const pool = pools.find(pool => pool.id ===
              props.match.params.id)
              return <NewPoolForm pool={pool} {...props}/>
              }
            }/>
       </Switch>
      </div>
          // <Route exact path='/Pools/:id'
            // <Route exact path='/pools/:id/edit' render={props => {
            //     // I need to get ???
            //     const pool = pools.find(pool => pool.id === props.match.params.id)
            //     // dispatch updateForm -> trip
            //     return <EditPoolFormWrapper pool={pool} {...props}/>
            //   }
            // }/>



    // <Footer/>
    );
 }
}

  const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    pools: state.myPools
    })
  }


export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
