import React from 'react'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import OrderCard from "../components/OrderCard"
import Button from "../style/Button"


const MyOrders = (user) => {
  const [orders, setOrders]=useState([])

    useEffect(() => {
      fetch("/orders")
        .then((r) => r.json())
        .then(setOrders);
    }, []);

    const removeOrder = (orderId) => {
      const updatedOrders=orders.filter(order=>order.id!==orderId)
      setOrders(updatedOrders)
    }

  return (
    <>
    <h1>{user.user.username}</h1>
      {orders.length > 0?(
        <Wrapper>
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} onDeleteOrder={removeOrder}></OrderCard>
          ))}
        </Wrapper>
      ):(
        <Container>
          <h2>No Items Found</h2>
          <Button as={Link} to="/">
            Add A New Item
          </Button>
        </Container>
      )}
    </>
  )
}

export default MyOrders

const Wrapper = styled.section`
  justify-content: center;  
  display: flex;
  flex: 4;
  flex-wrap: wrap;
  margin: 40px auto;
`;

const Wrap = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;

const Container= styled.div`
  text-align: center;
`
