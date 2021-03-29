import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css";
import icon1 from "../../assets/Home1/01Asset73.png";
import icon2 from "../../assets/Home1/01Asset74.png";
import icon3 from "../../assets/Home1/01Asset75.png";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-header header"
      variant="secondary"
    >
      <Navbar.Brand href="/">
        <img src={icon1} alt="logo" className="logo v-align mr-4" />
        <span className="v-align">MuteMasks</span>
        <img src={icon2} alt="logo" className="logo-icons ml-3" />
        <img src={icon3} alt="logo" className="logo-icons ml-3" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/mint">Mint</Nav.Link>
          <Nav.Link href="/gallery">Gallery</Nav.Link>
          <Nav.Link href="/wallet">Wallet</Nav.Link>
          <Nav.Link href="#">Connect</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
