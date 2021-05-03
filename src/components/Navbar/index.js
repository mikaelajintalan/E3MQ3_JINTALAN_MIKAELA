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
        </NavMenu>
        <NavMenu>
          <NavLink to='/helloUser' activeStyle>
            <span>Hello<a style={{ textDecoration: 'none', marginLeft: '.5rem', color: 'inherit'}} href="mailto:mikaela.jintalan@gmail.com">mikaela.jintalan@gmail.com!</a></span>
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;