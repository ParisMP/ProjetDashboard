
import React, { Component } from 'react';
import './App.css';
import Example from './Widgets/LineChart/LineChart';
import Widget2 from './Widgets/PieChart/PieChart';
import Topnav  from './Widgets/TopNavBar/TopNavBar';
import Nav from './Widgets/Nav/Nav';
import RadialBChart from './Widgets/RadialBarChart/RadialBarChart';

class App extends Component {

  render()
  {

    // {} will allow to reference the variables if dropdown button is clicked
    // don't put () next to clickDropDown or the method would be automatically executed
    //instead we pass a reference, we pass the address to that method
    return (
            <aside>
            <div className="row">
                <div className="col-8 col-sm-8 col-md-9 col-lg-9 col-xl-10">
                    <div className="divh">
            <Topnav/>
            <Nav/>
            <RadialBChart/>
            <Example/>
            <Widget2/>
            </div>
                </div></div></aside>

    );
  }
}

export default App;