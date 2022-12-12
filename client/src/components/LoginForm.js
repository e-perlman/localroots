import React, { useState } from "react";
import Error from "../style/Error"

const LoginForm = ({onLogin}) => {
  const [userInfo, setUserInfo]=useState({
    username:'',
    password:''
  })
  const [errors,setErrors]=useState([])

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
            r.json().then((user) => onLogin(user));
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
        <div>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                id="username"
                autoComplete="off"
                value={userInfo.username}
                onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                autoComplete="off"
                value={userInfo.password}
                onChange={handleChange}
            />
        </div>
        <button type="submit">Login</button>
        <div>
            {errors.map((err) => (
            <Error key={err}>{err}</Error>
            ))}
        </div>

    </form>
  )
}

export default LoginForm
