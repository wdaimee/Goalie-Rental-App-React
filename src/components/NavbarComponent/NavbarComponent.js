import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function NavbarComponent() {
    return (
       <Navbar collapseOnSelect expand="lg" variant="dark" style={{backgroundColor: "black", color: "white"}}>
           <Navbar.Brand href="/">gÜber - The Goalie Rental Company</Navbar.Brand>
           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
           <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="ml-auto">
                   <Nav.Link href="signup">Signup</Nav.Link>
                   <Nav.Link href="login">Log In</Nav.Link>
               </Nav>
           </Navbar.Collapse>
       </Navbar>
    );
}