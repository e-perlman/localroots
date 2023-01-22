import React, { useState } from "react";
import styled from "styled-components";
import Box from "../style/Box"
import Button from "../style/Button"
import { FormGroup, Label, Input, Message } from "../style/Forms"
import Error from "../style/Error"
import { useHistory } from "react-router";


const OrderCard = ({order, onDeleteOrder}) => {
    const [editOrder,setEditOrder]=useState(false)
    const [quantity,setQuantity]=useState(order.quantity)
    const [total, setTotal]=useState(order.product.price * order.quantity)
    const [errors,setErrors]=useState([])
    const product=order.product

    const handleOrderDelete = ()=>{
        fetch(`/orders/${order.id}`, {
            method: "DELETE",
            }).then((r) => {
            if (r.ok) {
                onDeleteOrder(order.id);
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });

    }

    const handleOrderEdit= (e) =>{
        e.preventDefault();
        setErrors([]);
        fetch(`/orders/${order.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                quantity,
            }),
            }).then((r) => {
            if (r.ok) {
                r.json().then((order) => setTotal(order.quantity * product.price));
                setEditOrder(!editOrder);
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return (
        <Card key={order.id}>
            <h2>{order.product.name}</h2>
            <h3>Category: {product.category}</h3>
            <h3>Store: {product.store}</h3>
            <h4>Price: ${product.price}</h4>
            {editOrder?(
                <>
                    <NumberLabel htmlFor="quantity">Quantity:</NumberLabel>
                    <NumberInput 
                        type='number'
                        value={quantity}
                        onChange={(e)=>setQuantity(e.target.value)}>
                    </NumberInput>
                </>
            ):(
                <h4>Quantity: {quantity}</h4>
            )}
            <h4>Total: ${total}</h4>

            <ButtonGroup>
                <Button onClick={()=>setEditOrder(!editOrder)}> 
                    {editOrder?("Cancel Edit"):("Edit Quantity")}
                </Button>
                {editOrder?(
                    <Button onClick={handleOrderEdit} color='secondary'>Update Order</Button>
                ):(
                    <Button onClick={handleOrderDelete}>Delete Item</Button>
                )}
            </ButtonGroup>
            {errors.map((err) => (
            <Error key={err}>{err}</Error>
            ))}
        </Card>
  )
}

export default OrderCard

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

const ButtonGroup = styled.nav`
  display: flex;
  gap: 15px;
`;



