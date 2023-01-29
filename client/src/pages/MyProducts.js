import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Button from "../style/Button"

const MyProducts = ({products}) => {
    console.log(products)
  return (
    <Wrap>
        <h1>My Products</h1>
        
        {products.length>0?(
            <Wrapper>
                {products.map((product) => (
                    <Card key={product.id}>
                        <h2>{product.name}</h2>
                        <h3>Category: {product.category}</h3>
                        <h3>Store: {product.store}</h3>
                        <h4>Price: ${product.price}</h4>
                    </Card>
                    ))
}
            </Wrapper>
        ):(
            <Container>
                <h2>No Products Found</h2>
                <Button as={Link} to="/">
                    Place a New Order
                </Button>
            </Container>

        )}
        
    </Wrap>
  )
}
const Wrapper = styled.section`
  justify-content: center;  
  display: flex;
  flex: 4;
  flex-wrap: wrap;
  margin: 40px auto;
`;
const Card = styled.div`
    border-radius: 2px;
    box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
        0 0 0 1px rgb(10 10 10 / 2%);
    padding: 40px;
    width: 400px;
    margin-right: 20px;

`;
const Container= styled.div`
  text-align: center;
`
const Wrap = styled.section`
  justify-content: center;
  padding: 16px;
`;

export default MyProducts
