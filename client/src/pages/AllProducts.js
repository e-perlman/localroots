import { useEffect, useState } from "react";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";
import Box from "../style/Box"
import Button from "../style/Button"

const AllProducts = ({onAddOrder}) => {
    const [products, setProducts]=useState([])

    useEffect(() => {
      fetch("/products")
        .then((r) => r.json())
        .then(setProducts);
    }, []);

  return (
    <Wrapper>
      {products.map((product) => (
         <ProductCard key={product.id} product={product} onAddOrder={onAddOrder}></ProductCard>
        ))
      }
    </Wrapper>
  )
}
const Wrapper = styled.section`
  justify-content: center;  
  display: flex;
  flex: 4;
  flex-wrap: wrap;
  margin: 40px auto;
`;

export default AllProducts
