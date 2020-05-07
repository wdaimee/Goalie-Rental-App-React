import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function NavbarComponent(props) {
   
    //variables for conditional rendering of navbar if the logged in user is a goalie
    let nav_goalie1;
    let nav_goalie2;
    if (props.user) {
        nav_goalie1 = props.user.goalie ? <Nav.Link href="/games">Find Games</Nav.Link> : null;
        nav_goalie2 = props.user.goalie ? <Nav.Link href="/mygames">My Games</Nav.Link> : null;
    }

    let nav = props.user ?
    <Navbar collapseOnSelect expand="lg" variant="dark" style={{backgroundColor: "black", color: "white", fontSize: "1.5rem"}}>
        <Navbar.Brand style={{fontSize: "1.5rem"}} href="/">gÜber - The Goalie Rental Company</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                {nav_goalie1}
                {nav_goalie2}
                <Nav.Link href="/requests">My Requests</Nav.Link>
                <Nav.Link href="/create">Make Request</Nav.Link>
                <Nav.Link href="/profile">Profile</Nav.Link>
                <Nav.Link href="/" onClick={props.handleLogout}>Log Out</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    :
    <Navbar collapseOnSelect expand="lg" variant="dark" style={{backgroundColor: "black", color: "white", fontSize: "1.5rem"}}>
           <Navbar.Brand style={{fontSize: "1.5rem"}} href="/">gÜber - The Goalie Rental Company</Navbar.Brand>
           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
           <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="ml-auto">
                   <Nav.Link href="/signup">Signup</Nav.Link>
                   <Nav.Link href="/login">Log In</Nav.Link>
               </Nav>
           </Navbar.Collapse>
    </Navbar>

    return (
       <>
        {nav}
       </>
    );
}