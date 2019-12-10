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
            <Col sm={4} md={4} lg={4} xl={4}><NavbarBrand href="/">MY DASHBOARD</NavbarBrand></Col>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem className="menuW">
                <Link to="/Widgets">Widgets</Link>
                </NavItem>
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
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );

    
};

export default Topnav;