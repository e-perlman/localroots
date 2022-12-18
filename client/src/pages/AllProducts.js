import { useEffect, useState } from "react";
import styled from "styled-components";
import Box from "../style/Box"

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
          <Card key={product.id}>
            <Box>
              <h2>{product.name}</h2>
              <h3>{product.category}</h3>
              <h3>{product.store}</h3>
              <h4>{product.price}</h4>
            </Box>
          </Card>
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
