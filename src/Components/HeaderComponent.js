import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';


const Header = () => {

    const[toggleNav, setNav] = useState(false);

    const navOpen = () =>{
        setNav(!toggleNav);
    };


    return(
        <>
        <Navbar className="navbar" dark expand="md" sticky="top">
                   <div className="container-fluid">

                   <NavbarToggler onClick={navOpen} />

                       <NavbarBrand href="/home">
                               <h1>To-DOs</h1>
                       </NavbarBrand>
                       
                       <Collapse isOpen={toggleNav} navbar>
                       <Nav className="col-10 hyper" navbar>
                           <NavItem>
                               <NavLink className="nav-link mr-1" to="/History">
                                    History
                               </NavLink>
                           </NavItem>
                           <NavItem>
                               <NavLink className="nav-link mr-1" to="/user">
                                    User
                               </NavLink>
                           </NavItem>
                       </Nav>

                       <Nav navbar>
                           <NavItem className="m-2">
                               <Button outline>Login</Button>
                           </NavItem>
                       </Nav>
                       
                       </Collapse>         
                      
                   </div>
               </Navbar>
       </>
    )
}

export default Header;