import React, { Component } from 'react';
import './App.css';
import Topnav  from './Widgets/TopNavBar/TopNavBar';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Widgets from './Widgets/Widgets'
import Utilisateurs from './Admin/Utilisateurs'
import Formulaire from './Admin/Formulaire/Formulaire.js'
import axios from 'axios';

class ComponentDidMount extends Component{
  componentDidMount() {
    axios.get('https://localhost:3001/users')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }
}


class App extends Component {

  render()
  {


    return (

      <BrowserRouter>

        <Topnav/>
        <Route path="/Formulaire" component={Formulaire}/>

        <Widgets/>
        
        
        <Route path="/Utilisateurs" component={Utilisateurs}/>


          
  
  </BrowserRouter>
    );
  }
}

export default App;