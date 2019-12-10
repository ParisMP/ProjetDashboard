import React, { Component } from 'react';
import './App.css';
import Topnav  from './Widgets/TopNavBar/TopNavBar';
import Nav from './Widgets/Nav/Nav';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Widgets from './Widgets/Widgets'
import Utilisateurs from './Admin/Utilisateurs'
import Formulaire from './Admin/Formulaire/Formulaire'

class App extends Component {

  render()
  {


    return (

      <BrowserRouter>

        <Topnav/>
        
        <Route path="/Widgets" component={Widgets}/>
        <Route path="/Utilisateurs" component={Utilisateurs}/>
        <Route path="/Formulaire" component={Formulaire}/>

          
  
  </BrowserRouter>
    );
  }
}

export default App;