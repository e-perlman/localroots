import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../style/Button"
import Logo from "../style/Logo"

const NavBar = ({user, setUser}) => {

    const handleLogout=() => {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }
  return (
    <Wrapper>
      <NavCart>
        <Button as={Link} to="/"> My Items</Button>
      </NavCart>
      <Logo>
        <Link to="/">Local Roots</Link>
      </Logo>
      <Nav>
        <Button as={Link} to="/new">
          New Product
        </Button>
        <Button color="secondary" onClick={handleLogout}> Logout</Button>
      </Nav>
      
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;


const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;

const NavCart = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  left: 8px;
`;

export default NavBar
