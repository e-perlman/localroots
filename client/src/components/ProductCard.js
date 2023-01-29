import React, { useState } from "react";
import styled from "styled-components";
import Box from "../style/Box"
import Button from "../style/Button"
import { FormGroup, Label, Input, Message } from "../style/Forms"
import Error from "../style/Error"
import { useHistory } from "react-router";



const ProductCard = ({product, onAddOrder}) => {
    const [quantity,setQuantity]=useState("1")
    const [errors,setErrors]=useState([])
    const [isAdded, setIsAdded] = useState(false);

    const handleSubmit= (e) =>{
        e.preventDefault();
        setErrors([]);
        fetch("/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                quantity,
                product_id: product.id,
            }),
            }).then((r) => {
            if (r.ok) {
                setIsAdded(true);
                r.json().then((product) => {
                    onAddOrder(product)
                  });
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }
  return (
    <form onSubmit={handleSubmit}>
        <Card key={product.id}>
                <h2>{product.name}</h2>
                <h3>Category: {product.category}</h3>
                <h3>Store: {product.store}</h3>
                <h4>${product.price}</h4>
            <FormGroup>
                <NumberLabel htmlFor="quantity">Quantity:</NumberLabel>
                <NumberInput 
                    type='number'
                    value={quantity}
                    onChange={(e)=>setQuantity(e.target.value)}>
                </NumberInput>
            </FormGroup>
            <Button type='submit'>{isAdded ? "Product Added!" : "Add Product"}</Button>
            <FormGroup>
                {errors.map((err) => (
                <Error key={err}>{err}</Error>
                ))}
        </FormGroup>
        </Card>
    </form>
  )
}

export default ProductCard

const Card = styled.div`
    border-radius: 2px;
    box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
        0 0 0 1px rgb(10 10 10 / 2%);
    padding: 40px;
    width: 400px;
    margin-right: 20px;

`;

export const NumberInput = styled.input`
    border-radius: 6px;
    border: 1px solid transparent;
    border-color: #dbdbdb;
    -webkit-appearance: none;
    max-width: 100%;
    width: 10%;
    font-size: 1rem;
    line-height: 1.5;
    padding: 4px;
`;

export const NumberLabel = styled.label`
    color: hsla(0, 0%, 100%, 0.88);
    font-size: 1rem;
    font-weight: 700;
    margin-right: 8px;
`;