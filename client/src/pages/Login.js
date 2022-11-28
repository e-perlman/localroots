import React from 'react'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'

const Login = ({onLogin}) => {
  return (
    <div>
        Login
      <LoginForm ></LoginForm>
      <SignupForm onLogin={onLogin}></SignupForm>
    </div>
  )
}

export default Login
