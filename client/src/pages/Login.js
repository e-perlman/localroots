import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'

const Login = ({onLogin}) => {
    const [seeLogin,setSeeLogin]=useState(true)
  return (
    <div>
        {seeLogin? (
            <>
                <LoginForm onLogin={onLogin}></LoginForm>
                <button onClick={()=>setSeeLogin(false)}>Don't have a profile?</button>
            </>

        ):(
            <>
                <SignupForm onLogin={onLogin}></SignupForm> 
                <button onClick={()=>setSeeLogin(true)}>Already have a profile?</button> 
            </>
        )}
    </div>
  )
}

export default Login
