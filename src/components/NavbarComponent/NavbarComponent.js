import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export default function NavbarComponent(props) {
   
    //variables for conditional rendering of navbar if the logged in user is a goalie
    let nav_goalie1;
    let nav_goalie2;
    if (props.user) {
        nav_goalie1 = props.user.goalie ? <Nav.Link as={Link} to="/games">Find Games</Nav.Link> : null;
        nav_goalie2 = props.user.goalie ? <Nav.Link as={Link} to="/mygames">My Games</Nav.Link> : null;
    }

    let nav = props.user ?
    <Navbar collapseOnSelect expand="lg" variant="dark" style={{backgroundColor: "black", color: "white", fontSize: "1.5rem"}}>
        <Navbar.Brand style={{fontSize: "2.0rem"}} as={Link} to="/">gÜber</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                {nav_goalie1}
                {nav_goalie2}
                <Nav.Link as={Link} to="/requests">My Requests</Nav.Link>
                <Nav.Link as={Link} to="/create">Make Request</Nav.Link>
                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                <Nav.Link as={Link} to="/" onClick={props.handleLogout}>Log Out</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    :
    <Navbar collapseOnSelect expand="lg" variant="dark" style={{backgroundColor: "black", color: "white", fontSize: "1.5rem"}}>
           <Navbar.Brand style={{fontSize: "2.0rem"}} href="/">gÜber</Navbar.Brand>
           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
           <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="ml-auto">
                   <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
                   <Nav.Link as={Link} to="/login">Log In</Nav.Link>
               </Nav>
           </Navbar.Collapse>
    </Navbar>

    return (
       <>
        {nav}
       </>
    );
}