import React from 'react';
import NavBar from './components/NavBar.js';
import { setFormDataForEdit } from './actions/newPoolForm.js'
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser} from './actions/currentUser.js'
import Login from './components/Login.js'
import NewPoolForm from './components/NewPoolForm.js'
import MyPools from './components/MyPools.js'
import MyLoans from './components/MyLoans.js'
import PoolCard from './components/PoolCard.js'
import Home from './components/Home.js'
import EditPoolContainer from './containers/EditPoolContainer.js'
import NewPoolContainer from './containers/NewPoolContainer.js'
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
          <Route exact path='/pools/new' component={NewPoolContainer}/>
          <Route exact path='/pools/:id' render={props => {
              const pool = pools.find(pool => pool.id === props.match.params.id)
                return <PoolCard pool={pool} {...props}/>
                }
              }/>
            <Route exact path='/pools/:id/edit' render={props => {
              const pool = pools.find(pool => pool.id ===
                props.match.params.id)
              return <EditPoolContainer pool={pool} {...props}/>
              }
            }/>
       </Switch>
      </div>

    );
 }
}

  const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    pools: state.myPools
    })
  }


export default withRouter(connect(mapStateToProps, { getCurrentUser, setFormDataForEdit })(App));
