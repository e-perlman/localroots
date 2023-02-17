import React, { useState } from "react";
import Error from "../style/Error"
import Button from "../style/Button"
import { FormGroup, Label, Input, Message } from "../style/Forms"
import { useHistory } from "react-router";


const LoginForm = ({onLogin}) => {
  const [userInfo, setUserInfo]=useState({
    username:'',
    password:''
  })
  const [errors,setErrors]=useState([])
  const history = useHistory();


  const handleSubmit= e =>{
      e.preventDefault()
      setErrors([]);
      fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: userInfo.username,
            password: userInfo.password,
          }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) => {
              onLogin(user)
            });
            history.push("/");
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
  }

  const handleChange= e =>{
      setUserInfo({
          ...userInfo,
          [e.target.id]:e.target.value
      })
  }
  return (
    <form onSubmit={handleSubmit}>
        <h2> Login</h2>
        <FormGroup>
            <Label htmlFor="username">Username</Label>
            <Input
                type="text"
                id="username"
                autoComplete="off"
                value={userInfo.username}
                onChange={handleChange}
            />
        </FormGroup>
        <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
                type="password"
                id="password"
                autoComplete="off"
                value={userInfo.password}
                onChange={handleChange}
            />
        </FormGroup>
        <FormGroup>
          <Button type="submit">Login</Button>
        </FormGroup>
        <FormGroup>
            {errors.map((err) => (
            <Error key={err}>{err}</Error>
            ))}
        </FormGroup>
    </form>
  )
}

export default LoginForm
