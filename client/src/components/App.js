import '../App.css';
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Login from '../pages/Login';
import NavBar from './NavBar'
import NewProduct from '../pages/NewProduct';
import AllProducts from '../pages/AllProducts';
import MyProducts from '../pages/MyProducts';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

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
          <Route path="/">
            <AllProducts></AllProducts>
          </Route>
          <Route path="/my_products">
            <MyProducts></MyProducts>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
