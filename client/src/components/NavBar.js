import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
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
    <Wrapper>
      <NavCart>
        <Button as={Link} to="/"> My Cart</Button>
      </NavCart>
      <Logo>
        <Link to="/">Local Roots</Link>
      </Logo>
      <Nav>
        <Button as={Link} to="/new">
          New Product
        </Button>
        <Button onClick={handleLogout}> Logout</Button>
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

const Logo = styled.h1`
  font-family: 'Montserrat Subrayada', sans-serif;
  font-size: 3rem;
  color: #a934ff;
  margin: 0;
  text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
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
