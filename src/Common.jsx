import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';
import faEllipsisH from '@fortawesome/fontawesome-free-solid/faEllipsisH';

const Home = () => (
  <div className="home">
    <h1>Home Section contents</h1>
  </div>
);

const Header = () => (
  <Navbar fluid>
    <Navbar.Header>
      <Navbar.Brand>Issue Tracker</Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <LinkContainer to="/">
        <NavItem>Home</NavItem>
      </LinkContainer>
      <LinkContainer to="/issues">
        <NavItem>Issues</NavItem>
      </LinkContainer>
      <LinkContainer to="/reports">
        <NavItem>Reports</NavItem>
      </LinkContainer>
      <LinkContainer to="/articles">
        <NavItem>Articles</NavItem>
      </LinkContainer>
    </Nav>
    <Nav pullRight>
      <NavItem><FontAwesomeIcon icon={faPlus} /> Create Issue</NavItem>
      <NavDropdown id="user-dropdown" title={<FontAwesomeIcon icon={faEllipsisH} noCaret/>} >
        <MenuItem>Logout</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
);
const Footer = () => (
  <div className="footer">
    <h5>
      <small> Full source code available at this
        &nbsp;<a href="https://github.com/ashotpahlevanyan/promernstack-book">Github repository</a>
      </small>
    </h5>
  </div>
);

export {
  Home,
  Header,
  Footer,
};
