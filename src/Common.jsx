import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faEllipsisH from '@fortawesome/fontawesome-free-solid/faEllipsisH';
import IssueAddNavItem from './IssueAddNavItem.jsx';

const Home = () => (
  <div className="home">
    <h1>Home Section contents</h1>
  </div>
);

const Brand = <Link to="/home">Issue Tracker</Link>;

const Header = () => (
  <Navbar fluid>
    <Navbar.Header>
      <Navbar.Brand>{Brand}</Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <LinkContainer to="/home">
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
      <IssueAddNavItem />
      <NavDropdown id="user-dropdown" title={<FontAwesomeIcon icon={faEllipsisH} />} noCaret>
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
