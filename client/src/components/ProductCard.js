import React, { useState } from "react";
import styled from "styled-components";
import Box from "../style/Box"
import Button from "../style/Button"
import Error from "../style/Error"
import { useHistory } from "react-router";



const ProductCard = ({product}) => {
    const [errors,setErrors]=useState([])


    // const handleAddClick= () =>{
    //     setErrors([]);
    //     fetch("/orders", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             username: userInfo.username,
    //             password: userInfo.password,
    //         }),
    //         }).then((r) => {
    //         if (r.ok) {
    //             r.json().then((user) => onLogin(user));
    //             history.push("/");
    //         } else {
    //             r.json().then((err) => setErrors(err.errors));
    //         }
    //         });
    // }
  return (
    <Card key={product.id}>
        <Box>
            <h2>{product.name}</h2>
            <h3>{product.category}</h3>
            <h3>{product.store}</h3>
            <h4>{product.price}</h4>
            <Button onClick={handleAddClick}>Add to My Items</Button>
        </Box>
    </Card>
  )
}

export default ProductCard

const Card = styled.article`
  margin-bottom: 24px;
`;