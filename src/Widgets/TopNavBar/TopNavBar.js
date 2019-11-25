import React from 'react';
import './TopNavBar.css';
import { Container, Row, Col } from 'reactstrap';


const Topnav = props => (

    <Container className="Topbar">
        
         <Row className="test">
            
            <Col><b href="/">MUSIC DASHBOARD</b></Col>
            <Col>
           
                <a href="/">Auditeurs en fonction des âges</a>
                <a href="/">Widget 2</a>
                <a href="/">Widget 3</a>
                <a href="/">Widget 4</a>
                <a href="/">Widget 5</a>
                <a href="/">Widget 6</a>

            </Col>
         </Row>
    
       
    </Container>
);

export default Topnav;