import React from 'react';
import './TopNavBar.css';
import { Container, Row, Col } from 'reactstrap';


const Topnav = props => (

    <Container className="Topbar">
        
         <Row>
            <Col><b href="/">MUSIC DASHBOARD</b></Col>
         </Row>
    
       
    </Container>
);

export default Topnav;