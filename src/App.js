import React, { Component } from 'react';
import './App.css';
import Topnav  from './Widgets/TopNavBar/TopNavBar';
import Nav from './Widgets/Nav/Nav';

import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Admin from './Admin/Admin'
import Widgets from './Widgets/Widgets'

class App extends Component {

  render()
  {

    // {} will allow to reference the variables if dropdown button is clicked
    // don't put () next to clickDropDown or the method would be automatically executed
    //instead we pass a reference, we pass the address to that method
    return (

      <BrowserRouter>

        <Route path="/Admin" component={Admin}/>
        <Route path="/Widgets" component={Widgets}/>
          <Topnav/>
          <Nav/>
  </BrowserRouter>
    );
  }
}

export default App;