import React from 'react';
import Example from './LineChart/LineChart';
import Widget2 from './PieChart/PieChart';
import RadialBChart from './RadialBarChart/RadialBarChart';
import ShapeBChart from './ShapeBarChart/ShapeBarChart';
import ShapeBChartW from './ShapeBarChartW/ShapeBarChartW';
import Pro from './Profiles/Profiles';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
<<<<<<< HEAD
import { Container, Row, Col } from 'reactstrap';
=======

>>>>>>> 30c34ed547273f69970a7f04cbc09794bd991b60

class Widgets extends React.Component{ 
  
    render(){
      return( 
      <div>
            
            <Row>
              <Col sm={12} md={6} lg={4} xl={4}><RadialBChart/></Col>
              <Col><Example/></Col>
              <Col><Widget2/></Col>
            </Row>
            <Row>
              <Col><ShapeBChart/></Col>
              <Col><ShapeBChartW/></Col>
              <Col><Pro/></Col>
            </Row>
          
      </div>
      );
    }
  }
  
  export default Widgets;