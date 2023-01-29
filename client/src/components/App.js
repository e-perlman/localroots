import '../App.css';
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Login from '../pages/Login';
import NavBar from './NavBar'
import NewProduct from '../pages/NewProduct';
import AllProducts from '../pages/AllProducts';
import MyOrders from '../pages/MyOrders';

function App() {
  const [user, setUser] = useState(null);
  const [orders,setOrders]=useState([])

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
          setOrders(user.orders)
        });
      }
    });
  }, []);

  const handleNewOrder = (newOrder)=>{
    setOrders([...orders,newOrder])
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
            <MyOrders myorders={orders}></MyOrders>
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
