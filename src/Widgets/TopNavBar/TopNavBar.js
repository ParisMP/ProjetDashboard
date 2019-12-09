import React from 'react';
import './TopNavBar.css';
import { Container, Row, Col } from 'reactstrap';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';



const Topnav = props => (

    <Container className="Topbar">
        
         <Row>
            <Col><b href="/">MUSIC DASHBOARD</b></Col>
            <Link to="/Admin" className="link1">Admin</Link>
            <Link to="/Widgets" className="link1">Widgets</Link>
         </Row>
    
       
    </Container>
);

export default Topnav;