import React, { useState } from 'react';
import './TopNavBar.css';
import { Container, Row, Col } from 'reactstrap';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

const Topnav = props => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
          <Navbar className="header" light expand="md">
            <Col sm={1} md={3} lg={2} xl={2}><NavbarBrand href="/">MY DASHBOARD</NavbarBrand></Col>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <Col>
                    <NavItem className="menuW">
                    <NavLink href="/Widgets/">Widgets</NavLink>
                    </NavItem>
                </Col>
                <Col>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Admin
                  </DropdownToggle>
                  <DropdownMenu left>
                    <DropdownItem>
                        <Link to="/Utilisateurs" className="menuL">Liste des utilisateurs</Link>
                    </DropdownItem>
                    <DropdownItem>
                        <Link to="/Formulaire" className="menuF">Ajouter un utilisateur</Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                </Col>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );

    
};

export default Topnav;