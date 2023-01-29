import React from 'react'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import OrderCard from "../components/OrderCard"
import Button from "../style/Button"


const MyOrders = ({orders, onDeleteOrder}) => {


  return (
    <Wrap>
    <h1>My Orders</h1>
      {orders.length > 0?(
        <Wrapper>
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} onDeleteOrder={onDeleteOrder}></OrderCard>
          ))}
        </Wrapper>
      ):(
        <Container>
          <h2>No Orders Found</h2>
          <Button as={Link} to="/">
            Place a New Order
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
