import React from 'react'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import OrderCard from "../components/OrderCard"
import Button from "../style/Button"


const MyOrders = ({myorders}) => {
  const [orders, setOrders]=useState(myorders)

    // useEffect(() => {
    //   fetch("/orders")
    //     .then((r) => r.json())
    //     .then(setOrders);
    // }, []);
    console.log(orders)

    const removeOrder = (orderId) => {
      const updatedOrders=orders.filter(order=>order.id!==orderId)
      setOrders(updatedOrders)
    }

  return (
    <Wrap>
    <h1>My Orders</h1>
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
    </Wrap>
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
  justify-content: center;
  padding: 16px;
`;

const Container= styled.div`
  text-align: center;
`
