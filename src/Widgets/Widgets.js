import React from 'react';
import Example from './LineChart.js';
import Widget2 from './PieChart.js';
import RadialBChart from './RadialBarChart.js';
import ShapeBChart from './ShapeBarChart.js';
import ShapeBChartW from './ShapeBarChartW.js';
import Pro from './Profiles.js';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import './Widgets.css';


class Widgets extends React.Component{ 
  
    render(){
      return( 
      <div >
            
            <Row >
              <Col className="widget1" sm={12} md={6} lg={4} xl={4}><RadialBChart/></Col>
              <Col className="widget2" sm={12} md={6} lg={4} xl={4}><Example/></Col>
              <Col className="widget3" sm={12} md={6} lg={4} xl={4}><Widget2/></Col>

              <Col className="widget4" sm={12} md={6} lg={4} xl={4}><ShapeBChart/></Col>
              <Col className="widget1" sm={12} md={6} lg={4} xl={4}><ShapeBChartW/></Col>
              <Col className="widget1" sm={12} md={6} lg={4} xl={4}><Pro/></Col>
            </Row>
          
      </div>
      );
    }
  }
  
  export default Widgets;