import React from 'react';
import './TopNavBar.css';
import { Container, Row, Col } from 'reactstrap';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';


const Topnav = props => (

    <Container className="Topbar">
        
         <Row>
            <Col><b href="/">MUSIC DASHBOARD</b></Col>
            
            <Col><Link to="/Admin" className="link1">Admin</Link></Col>
         </Row>
    
       
    </Container>
);

export default Topnav;