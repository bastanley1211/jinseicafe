import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { navbar } from "./Style";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render(props) {
    return (
      <div className="App sticky-top">
        <Navbar light style={navbar}>
          <div className="container-fluid">
            <NavbarBrand href="/">
              <h1 id="branding">Jinsei</h1>
              <h2 id="brandSubtitle">A Thought Cafe</h2>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar className="text-center">
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <i className="fa fa-home fa-lg" /> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/profile">
                    <i className="fa fa-user-circle fa-lg" /> Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/archive">
                    <i className="fa fa-user fa-lg" /> Archive
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/settings">
                    <i className="fa fa-cog fa-lg" /> Settings
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Header;
