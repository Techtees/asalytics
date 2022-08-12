import React from 'react';
import styled from 'styled-components'
import logo from './../images/logo.svg'
import Button from './Button'

const Nav = styled.div`
display:flex;
justify-content:center;
padding: 2em 0;
`
const Listitems = styled.div`
max-width:1312px;
width: 85%;
display:flex;
margin: 0px auto;
justify-content:space-between;

`


const NavBar = () => {
    return ( 
        <Nav>
            <Listitems> 
                <img src={logo} alt="header logo" />
                <div><Button text='ANALYSE ASAs' /></div>
            </Listitems>
        </Nav>
      );
}
 
export default NavBar;