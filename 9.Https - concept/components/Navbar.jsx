import { useState } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

import Order from "./Order";

function BasicExample({ cart, onShow }) {
  const [showOrder, setShowOrder] = useState(false);
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Urban-Cart</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <div className="d-flex gap-4">
                <Button onClick={onShow}>
                  Carts <Badge bg="secondary">{cart.length}</Badge>
                </Button>
                <Button onClick={() => setShowOrder(true)}>Your Order</Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Order onHide={() => setShowOrder(false)} onShow={showOrder} />
    </>
  );
}

export default BasicExample;