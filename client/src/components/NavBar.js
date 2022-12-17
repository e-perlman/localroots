import React from 'react'
import Button from "../style/Button"


const NavBar = ({user, setUser}) => {

    const handleLogout=() => {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }
  return (
    <div>
      <Button onClick={handleLogout}> Logout</Button>
    </div>
  )
}

export default NavBar
