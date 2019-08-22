import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about"
import { Navbar, Nav, Container } from 'react-bootstrap';

const RouterApp = () => {
  return (
        <Router>
            <Navbar bg="dark" variant   ="dark">
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </Container>
        </Router>
    )
}

export default RouterApp;