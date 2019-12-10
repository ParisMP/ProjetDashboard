import React from 'react';
import Example from './LineChart/LineChart';
import Widget2 from './PieChart/PieChart';
import RadialBChart from './RadialBarChart/RadialBarChart';
import ShapeBChart from './ShapeBarChart/ShapeBarChart';
import ShapeBChartW from './ShapeBarChartW/ShapeBarChartW';
import Pro from './Profiles/Profiles';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

class Widgets extends React.Component{ 
  
    render(){
      return( 
      <div>
            
            <Row>
              <Col sm={12} md={6} lg={4} xl={4}><RadialBChart/></Col>
              <Col sm={12} md={6} lg={4} xl={4}><Example/></Col>
              <Col sm={12} md={6} lg={4} xl={4}><Widget2/></Col>
            </Row>
            <Row>
              <Col sm={12} md={6} lg={4} xl={4}><ShapeBChart/></Col>
              <Col sm={12} md={6} lg={4} xl={4}><ShapeBChartW/></Col>
              <Col sm={12} md={6} lg={4} xl={4}><Pro/></Col>
            </Row>
          
      </div>
      );
    }
  }
  
  export default Widgets;