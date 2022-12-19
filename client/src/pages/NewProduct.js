import React, { useState } from "react";
import { useHistory } from "react-router";
import Error from "../style/Error"
import Button from "../style/Button"
import { FormGroup, Label, Input, Message } from "../style/Forms"
import styled from "styled-components";



const NewProduct = () => {
    const [productInfo, setProductInfo]=useState({
        name:'',
        category:'',
        store:'',
        price:'',
    })
    
    const [errors,setErrors]=useState([])
    const history = useHistory();

    const handleSubmit= e =>{
        e.preventDefault()
        setErrors([]);
        fetch("/products", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: productInfo.name,
              category: productInfo.category,
              store: productInfo.store,
              price: productInfo.price,
            }),
          }).then((r) => {
            if (r.ok) {
              r.json().then((user) => history.push("/"));
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
          });
    }
    const handleChange= e =>{
        setProductInfo({
            ...productInfo,
            [e.target.id]:e.target.value
        })
    }

  return (
    <Wrapper>
        <form onSubmit={handleSubmit}>
            <h2> Add a New Product</h2>
            <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input
                    type="text"
                    id="name"
                    autoComplete="off"
                    value={productInfo.name}
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="category">Category</Label>
                <Input
                    type="text"
                    id="category"
                    autoComplete="off"
                    value={productInfo.category}
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="store">Store</Label>
                <Input
                    type="text"
                    id="store"
                    autoComplete="off"
                    value={productInfo.store}
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="price">Price</Label>
                <Input
                    type="decimal"
                    id="price"
                    autoComplete="off"
                    value={productInfo.price}
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
            <Button type="submit">Add Product</Button>
            </FormGroup>
            <FormGroup>
                {errors.map((err) => (
                <Error key={err}>{err}</Error>
                ))}
            </FormGroup>
        </form>
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

export default NewProduct
