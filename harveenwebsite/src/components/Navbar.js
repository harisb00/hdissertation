import React from 'react';
import './Navbar.css';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Navigation = (props) => {
    console.log(props);
    return (
        <Navbar bg="#808080" variant="dark">
            <Navbar.Brand href="/">Asthma Support</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Physical">Physical Risks</Nav.Link>
                    <Nav.Link href="/Social">Social Life</Nav.Link>
                    <Nav.Link href="/Treatments">Treatments</Nav.Link>
                    <Nav.Link href="/Videos">Helpful Videos</Nav.Link>
                    <Nav.Link href="/ReachOut">Reach Out</Nav.Link>
                    <Nav.Link href="/AsthmaPlan">Asthma Plan</Nav.Link>



                </Nav>
        </Navbar>
    )
}

export default withRouter(Navigation);