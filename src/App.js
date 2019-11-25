import React, { Component } from 'react';
import './App.css';
import Example from './Widgets/LineChart/LineChart';
import Widget2 from './Widgets/PieChart/PieChart';
import Topnav  from './Widgets/TopNavBar/TopNavBar';
import Nav from './Widgets/Nav/Nav';
import RadialBChart from './Widgets/RadialBarChart/RadialBarChart';
import ShapeBChart from './Widgets/ShapeBarChart/ShapeBarChart';
import ShapeBChartW from './Widgets/ShapeBarChartW/ShapeBarChartW';
import Pro from './Widgets/Profiles/Profiles';

class App extends Component {

  render()
  {

    // {} will allow to reference the variables if dropdown button is clicked
    // don't put () next to clickDropDown or the method would be automatically executed
    //instead we pass a reference, we pass the address to that method
    return (
            <aside>
        
            <row>
              <div className="col-sm-8 col-md-9 col-lg-9 col-xl-10"><Topnav/></div>
              <div className="col-sm-4 col-md-3 col-lg-3 col-xl-2"><Nav/></div>
            </row>
            <row>   <body>
              <RadialBChart/>
            <Example/>
            <Widget2/>
            <ShapeBChart/>
            <ShapeBChartW/>
            <Pro/>
            </body>
            </row>
         
          
            </aside>

    );
  }
}

export default App;