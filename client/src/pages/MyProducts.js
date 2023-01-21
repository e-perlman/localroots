import React from 'react'
import { useEffect, useState } from "react";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";

const MyProducts = () => {
  const [products, setProducts]=useState([])

    useEffect(() => {
      fetch("/myitems")
        .then((r) => r.json())
        .then(setProducts);
    }, []);

    console.log(products)
  return (
    <div>
      
    </div>
  )
}

export default MyProducts
