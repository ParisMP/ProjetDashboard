import React from 'react';
import Example from './LineChart/LineChart';
import Widget2 from './PieChart/PieChart';
import RadialBChart from './RadialBarChart/RadialBarChart';
import ShapeBChart from './ShapeBarChart/ShapeBarChart';
import ShapeBChartW from './ShapeBarChartW/ShapeBarChartW';
import Pro from './Profiles/Profiles';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';


class Widgets extends React.Component{ 
  
    render(){
      return( 
      <div>
            <RadialBChart/>
            <Example/>
            <Widget2/>
            <ShapeBChart/>
            <ShapeBChartW/>
            <Pro/>
    
      </div>
      );
    }
  }
  
  export default Widgets;