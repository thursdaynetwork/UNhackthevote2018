import React from 'react';
import { Nav, Navbar, NavItem, } from 'react-bootstrap'

export default class About extends React.Component {
  /*  
  constructor() {
    super()
  }
  */
  render (){
    return (
      <div>
        <Navbar>
          <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">React-Bootstrap</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">
              About
            </NavItem>
            <NavItem eventKey={2} href="#">
              Sponsors
            </NavItem>
            <NavItem>
              Location
            </NavItem>
            <NavItem>
              Schedule
            </NavItem>
            <NavItem>
              Code of Conduct
            </NavItem>
            {/*
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>About</MenuItem>
              <MenuItem eventKey={3.2}>Location</MenuItem>
              <MenuItem eventKey={3.3}>Schedule</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
            */}
          </Nav>
        </Navbar>
        <h1>This is the About page</h1>
        <p>It's path is src/views/About.js</p>
      </div>
    );
  }
}