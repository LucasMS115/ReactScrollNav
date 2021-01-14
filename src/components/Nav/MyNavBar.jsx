import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  z-index: 10;
  background-color: #272626; 
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

`

const NavBar = () => {
  return (
      <Nav>
        <Burger />
      </Nav>
  )
}

export default NavBar;
