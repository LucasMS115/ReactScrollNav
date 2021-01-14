import React from 'react';
import styled from 'styled-components';
import NavBt from './NavBt';
import {ReactComponent as Logo} from '../../assets/images/logo.svg';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  .side-menu{
    margin-top: 6rem;
    visibility: hidden;
    position: absolute;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #272626; // BG COLOR
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 65vw;
    padding-top: 10rem;
    transition: transform 0.3s ease-in-out;
    text-align: center;

    .side-menu{
      visibility: visible;
      position: relative;
    }

  }

    
`;

const navBtnsContainer = {
  display: "flex",
  position: "absolute",
  top: "1.5rem",
  right: "1rem",
  color:"white",
  fontSize: "2.5rem"
}

const logoStyle = {
  width: "9rem",
  height: "9rem",
  cursor: "pointer"
}

const RightNav = ({ open }) => {
  return (
    <div >

      <a href='/'>
        <Logo style={logoStyle}/>      
      </a>

      <div style={navBtnsContainer}>
        <Ul open={open}>
            <NavBt path="Header" name="Header"/>
            <NavBt path="S1" name="Section-1"/>
            <NavBt path="S2" name="Section-2"/>
            <NavBt path="S3" name="Section-3"/>

            <div className="side-menu">
              <div className="flex-container-column ">
                <p style={{fontSize: "2rem"}}>Alguma Soisa</p>
                <p >Something</p>
                <h2 >ANYTHING</h2>
              </div>
            </div>

        </Ul>

      </div>
    </div>
  )
}

export default RightNav;
