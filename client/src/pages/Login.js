import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'
import styled from "styled-components";
import Button from "../style/Button"
import Logo from "../style/Logo"


const Login = ({onLogin}) => {
    const [seeLogin,setSeeLogin]=useState(true)
  return (
    <Wrapper>
      <Logo>Local Roots</Logo>
        {seeLogin? (
            <>
                <LoginForm onLogin={onLogin}></LoginForm>
                <Divider/>
                <Button color="secondary" onClick={()=>setSeeLogin(false)}>Don't have a profile?</Button>
            </>

        ):(
            <>
                <SignupForm onLogin={onLogin}></SignupForm> 
                <Divider/>
                <Button color="secondary" onClick={()=>setSeeLogin(true)}>Already have a profile?</Button> 
            </>
        )}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;

export default Login
