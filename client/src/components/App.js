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
  const [user, setUser] = useState(null); 
  const [orders,setOrders]=useState([])
  const [products,setProducts]=useState([])

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
          setOrders(user.orders)
          setProducts(user.products)
        });
      }
    });
  }, []);

  const distinctProducts =(products) =>{
    return [...new Map(products.map((item) => [item["id"], item])).values(),]
  }
 
  const handleNewOrder = (newOrder)=>{
    setOrders([...orders,newOrder])
    const duplicateProducts=[...products,newOrder.product]
    const newProducts=distinctProducts(duplicateProducts)
    setProducts(newProducts)
  }
  const handleRemoveOrder = (orderId,productId) => {
    const updatedOrders=orders.filter(order=>order.id!==orderId)
    setOrders(updatedOrders)

    const duplicateProducts=updatedOrders.map((order)=>order.product)
    const newProducts=distinctProducts(duplicateProducts)
    setProducts(newProducts)
  }


  if (!user) return <Login onLogin={setUser}/>

  return (
    <>
      <h2>Welcome {user.username}!</h2>
      <NavBar user={user} setUser={setUser}></NavBar>
      <main>
        <Switch>
          <Route path="/new_product">
            <NewProduct></NewProduct>
          </Route>
          <Route path="/my_orders">
            <MyOrders orders={orders} onDeleteOrder={handleRemoveOrder}></MyOrders>
          </Route>
          <Route path='/my_products'>
            <MyProducts products={products}></MyProducts>
          </Route>
          <Route path="/">
            <AllProducts onAddOrder={handleNewOrder}></AllProducts>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
