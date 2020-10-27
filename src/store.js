// import users from './reducers/users.js'
import currentUser from './reducers/currentUser.js'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import loginForm from './reducers/loginForm.js'
import myPools from './reducers/myPools.js'
import newPoolForm from './reducers/newPoolForm.js'
import loans from './reducers/loans.js'
import signupForm from './reducers/signupForm.js'

const reducer = combineReducers({
  // users: users,
  currentUser,
  loginForm,
  signupForm,
  myPools,
  newPoolForm,
  loans
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

 export default store
