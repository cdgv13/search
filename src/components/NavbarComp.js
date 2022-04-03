import React, { Component } from "react";
import {
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Nav,
  Container,
} from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import _searchUser from "./_searchUser";
import _searchRepository from "./_searchRepository";

const _navbarComp = () => {
  return (
    <Router>
      <div>
        <Navbar bg="dark" varian={"dark"} expand="lg">
          <Container fluid>
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
            >
              <Nav.Link as={Link} to={"/searchuser"}>
                Search User
              </Nav.Link>
              <Nav.Link as={Link} to={"/searchrepository"}>
                Search Repository
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div>
        <Routes>
          <Route path="/searchuser" element={<_searchUser />}></Route>
          <Route
            path="/searchrepository"
            element={<_searchRepository />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default _navbarComp;
