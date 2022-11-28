import React, { useState } from "react";
import Error from "../style/Error"

const SignupForm = ({onLogin}) => {
    const [userInfo, setUserInfo]=useState({
        username:'',
        password:'',
        passwordConfirmation:'',
        bio:'',
        imageUrl:''
    })
    const [errors,setErrors]=useState([])
    
    const handleSubmit= e =>{
        e.preventDefault()
        setErrors([]);
        fetch("/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: userInfo.username,
              password: userInfo.password,
              password_confirmation: userInfo.passwordConfirmation,
              image_url: userInfo.imageUrl,
              bio: userInfo.bio,
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
        <div>
            <label htmlFor="password">Password Confirmation</label>
            <input
                type="password"
                id="passwordConfirmation"
                autoComplete="off"
                value={userInfo.passwordConfirmation}
                onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="imageUrl">Profile Picture</label>
            <input
                type="text"
                id="imageUrl"
                value={userInfo.imageUrl}
                onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="bio">Bio</label>
            <textarea
                rows="3"
                id="bio"
                value={userInfo.bio}
                onChange={handleChange}
            />
        </div>
        <button type="submit">Sign Up</button>
        <div>
            {errors.map((err) => (
            <Error key={err}>{err}</Error>
            ))}
        </div>

    </form>
  )
}

export default SignupForm
