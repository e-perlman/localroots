import { useEffect, useState } from "react";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";
import Box from "../style/Box"
import Button from "../style/Button"

const AllProducts = () => {
    const [products, setProducts]=useState([])

    useEffect(() => {
      fetch("/products")
        .then((r) => r.json())
        .then(setProducts);
    }, []);

  return (
    <Wrapper>
      {products.map((product) => (
         <ProductCard key={product.id} product={product}></ProductCard>
        ))
      }
    </Wrapper>
  )
}
const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

const Card = styled.article`
  margin-bottom: 24px;
`;

export default AllProducts
