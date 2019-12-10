import React, { Component } from 'react';
import './App.css';
import Topnav  from './Widgets/TopNavBar/TopNavBar';
import Nav from './Widgets/Nav/Nav';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Admin from './Admin/Admin'
import Widgets from './Widgets/Widgets'
<<<<<<< HEAD



=======
import Utilisateurs from './Admin/Utilisateurs'
import Formulaire from './Admin/Formulaire'
>>>>>>> 30c34ed547273f69970a7f04cbc09794bd991b60

class App extends Component {

  render()
  {


    return (

      <BrowserRouter>

        <Topnav/>
        

        <Route path="/Admin" component={Admin}/>
        <Route path="/Widgets" component={Widgets}/>
<<<<<<< HEAD
        
       
=======
        <Route path="/Utilisateurs" component={Utilisateurs}/>
        <Route path="/Formulaire" component={Formulaire}/>
>>>>>>> 30c34ed547273f69970a7f04cbc09794bd991b60

          
  
  </BrowserRouter>
    );
  }
}

export default App;