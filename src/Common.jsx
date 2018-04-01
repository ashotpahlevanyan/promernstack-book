import React from 'react';
import { Navbar, Nav, NavItem, NavLink, NavbarBrand, NavbarToggler, Collapse, Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faEllipsisH from '@fortawesome/fontawesome-free-solid/faEllipsisH';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';

import IssueAddNavItem from './IssueAddNavItem.jsx';

const Home = () => (
  <div className="home">
    <h1>Home Section contents</h1>
  </div>
);

const Brand = <Link to="/home">Issue Tracker</Link>;

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.dropdownToggle = this.dropdownToggle.bind(this);
    this.onBlur = this.onBlur.bind(this);

    this.state = {
      isOpen: false,
      dropdownOpen: false,
    };
  }


  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  dropdownToggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  onBlur() {
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <Navbar expand="md" onBlur={this.onBlur}>
        <NavbarBrand>{Brand}</NavbarBrand>
        <NavbarToggler onClick={this.toggle}><FontAwesomeIcon icon={faBars}/></NavbarToggler>
        <Collapse isOpen={this.state.isOpen} navbar  style={{ 'justify-content': 'space-between' }}>
          <Nav navbar>
            <NavItem active>
              <LinkContainer to="/home"><NavLink>Home</NavLink></LinkContainer>
            </NavItem>
            <NavItem>
              <LinkContainer to="/issues"><NavLink>Issues</NavLink></LinkContainer>
            </NavItem>
            <NavItem>
              <LinkContainer to="/reports"><NavLink>Reports</NavLink></LinkContainer>
            </NavItem>
            <NavItem>
              <LinkContainer to="/articles"><NavLink>Articles</NavLink></LinkContainer>
            </NavItem>
          </Nav>
          <Nav>
            <IssueAddNavItem />
            <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.dropdownToggle}>
              <DropdownToggle id="user-dropdown" color="link">
                <FontAwesomeIcon icon={faEllipsisH}/>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Logout</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

const Footer = () => (
  <div className="footer">
    <h5>
      <small> Full source code available at this
        &nbsp;<a href="https://github.com/ashotpahlevanyan/promernstack-book">Github repository</a>
      </small>
    </h5>
  </div>
);

export default Header;

export {
  Home,
  Footer,
};
