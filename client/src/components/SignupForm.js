import React, { useState } from "react";
import Error from "../style/Error"
import Button from "../style/Button"
import { FormGroup, Input, Label, Textarea } from "../style/Forms";
import { useHistory } from "react-router";



const SignupForm = ({onLogin}) => {
    const [userInfo, setUserInfo]=useState({
        username:'',
        password:'',
        passwordConfirmation:'',
        bio:'',
        imageUrl:''
    })
    const [errors,setErrors]=useState([])
    const history = useHistory();

    
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
        <h2> SignUp</h2>
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
            <Label htmlFor="password">Password Confirmation</Label>
            <Input
                type="password"
                id="passwordConfirmation"
                autoComplete="off"
                value={userInfo.passwordConfirmation}
                onChange={handleChange}
            />
        </FormGroup>
        <FormGroup>
            <Label htmlFor="imageUrl">Profile Picture</Label>
            <Input
                type="text"
                id="imageUrl"
                value={userInfo.imageUrl}
                onChange={handleChange}
            />
        </FormGroup>
        <FormGroup>
            <Label htmlFor="bio">Bio</Label>
            <Textarea
                rows="3"
                id="bio"
                value={userInfo.bio}
                onChange={handleChange}
            />
        </FormGroup>
        <Button type="submit">Sign Up</Button>
        <FormGroup>
            {errors.map((err) => (
            <Error key={err}>{err}</Error>
            ))}
        </FormGroup>

    </form>
  )
}

export default SignupForm
