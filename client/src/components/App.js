import '../App.css';
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Login from '../pages/Login';
import NavBar from './NavBar'
import NewProduct from '../pages/NewProduct';
import AllProducts from '../pages/AllProducts';
import MyOrders from '../pages/MyOrders';
import MyProducts from '../pages/MyProducts';

function App() {
  const [user, setUser]=useState({
    username:null,
    image_url:null,
    bio:null,
    orders:[],
    products:[]
  })
  const [allProducts, setAllProducts]=useState([])


  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
        });
      }
    });
  }, []);

  useEffect(() => {
    fetch("/products").then((r) =>{
      if (r.ok) {
        r.json().then((products)=>setAllProducts(products))
      }
    })
  }, []);

  const distinctProducts =(products) =>{
    return [...new Map(products.map((item) => [item["id"], item])).values(),]
  }
 
  const handleNewOrder = (newOrder)=>{
    const duplicateProducts=[...user.products,newOrder.product]
    const newProducts=distinctProducts(duplicateProducts)

    setUser({...user,orders:[...user.orders,newOrder], products:newProducts})
  }
  const handleRemoveOrder = (orderId) => {
    const updatedOrders=user.orders.filter(order=>order.id!==orderId)
    const duplicateProducts=updatedOrders.map((order)=>order.product)
    const newProducts=distinctProducts(duplicateProducts)
    setUser({...user, orders:updatedOrders, products:newProducts})
  }

  const handleNewProduct= (newProduct)=>{
    setAllProducts([...allProducts,newProduct])
  }
  
  if (!user) return <Login onLogin={setUser}/>

  return (
    <>
      <h2>Welcome {user.username}!</h2>
      <NavBar user={user} setUser={setUser}></NavBar>
      <main>
        <Switch>
          <Route path="/new_product">
            <NewProduct onAddProduct={handleNewProduct}></NewProduct>
          </Route>
          <Route path="/my_orders">
            <MyOrders orders={user.orders} onDeleteOrder={handleRemoveOrder}></MyOrders>
          </Route>
          <Route path='/my_products'>
            <MyProducts products={user.products}></MyProducts>
          </Route>
          <Route path="/">
            <AllProducts products={allProducts} onAddOrder={handleNewOrder}></AllProducts>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
