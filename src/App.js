
import React, { Component } from 'react';
import './App.css';
import Example from './Widgets/LineChart/LineChart';
import Widget2 from './Widgets/PieChart/PieChart';
import Nav from './Widgets/Nav/Nav';

class App extends Component {

  render()
  {

    // {} will allow to reference the variables if dropdown button is clicked
    // don't put () next to clickDropDown or the method would be automatically executed
    //instead we pass a reference, we pass the address to that method
    return (
        <div className="divh">
            <Nav/>
         <Example/>
         <Widget2/>
        </div>
    );
  }
}

export default App;