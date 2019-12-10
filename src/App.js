import React, { Component } from 'react';
import './App.css';
import Topnav  from './Widgets/TopNavBar/TopNavBar';
import Nav from './Widgets/Nav/Nav';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Admin from './Admin/Admin'
import Widgets from './Widgets/Widgets'
import Utilisateurs from './Admin/Utilisateurs'
import Formulaire from './Admin/Formulaire'

class App extends Component {

  render()
  {


    return (

      <BrowserRouter>

        <Topnav/>
        <Nav/>

        <Route path="/Admin" component={Admin}/>
        <Route path="/Widgets" component={Widgets}/>
        <Route path="/Utilisateurs" component={Utilisateurs}/>
        <Route path="/Formulaire" component={Formulaire}/>

          
  
  </BrowserRouter>
    );
  }
}

export default App;