import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from "../actions/loginForm.js"
import { login } from "../actions/currentUser.js"


// updating form handler using redux
const Login = ({ loginFormData, updateLoginForm, login }) => {
  const handleChange = event => {
    const {name, value} = event.target
    const updatedFormInfo = {
      ...loginFormData,
      [name]: value
    }
    updateLoginForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    login(loginFormData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="username" value={loginFormData.username} type="text" name="username" onChange={handleChange} />
      <input placeholder="password" value={loginFormData.password} type="text" name="password" onChange={handleChange}/>
      <input type="submit" value="Log In" />
    </form>
  )
}

const mapStateToProps = state => {
  return {
    loginFormData: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)
