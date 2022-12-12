import React from 'react'

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
      <button onClick={handleLogout}> Logout</button>
    </div>
  )
}

export default NavBar
