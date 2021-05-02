import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,

} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/index' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          
          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavMenu>
          <NavLink to='/alert'>Hello mikaela.jintalan@mail.com!</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;