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


  console.log('from app')
  console.log(products)

  useEffect(() => {
    // auto-login
    console.log('auto login')
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

 
  const handleNewOrder = (newOrder)=>{
    setOrders([...orders,newOrder])
    setProducts([...products,newOrder.product])
  }
  const handleRemoveOrder = (orderId,productId) => {
    const updatedOrders=orders.filter(order=>order.id!==orderId)
    setOrders(updatedOrders)

    const updatedProducts=products.filter(product=>product.id!==productId)
    setProducts(updatedProducts)
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
