import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pages/home/";
import About from "./pages/about/"
import { Navbar, Nav } from 'react-bootstrap';

const RouterApp = () => {
    return (
        <Router>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/about">About</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
        </Router>
    )
}

export default RouterApp;