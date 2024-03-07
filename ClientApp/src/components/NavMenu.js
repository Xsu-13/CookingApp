import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../custom.css'
import '../styles/NavMenu.css';


export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3 nav-menu" container light>
          <NavbarBrand tag={Link} to="/">
            <div class="logo"><img class='logo-img img-responsive' src='images/cookingIcon.png'/></div> 
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row nav-links" isOpen={!this.state.collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem className="nav-link">
                <NavLink tag={Link} className="text-dark" to="/">Главная</NavLink>
              </NavItem>
              <NavItem className="nav-link">
                <NavLink tag={Link} className="text-dark" to="/counter">Сохраненные рецепты</NavLink>
              </NavItem>
              <NavItem className="nav-link">
                <NavLink tag={Link} className="text-dark" to="/fetch-data">Уведомления</NavLink>
              </NavItem>
              <NavItem className="nav-link">
                <NavLink tag={Link} className="text-dark" to="/profile">Профиль</NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
