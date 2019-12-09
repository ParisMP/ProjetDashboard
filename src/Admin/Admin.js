import React from 'react';
import Formulaire from './Formulaire';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';



class Admin extends React.Component{ 
  
    render(){
      return( 
      <div>
         
        <h3>Bienvenue dans l'espace admin !</h3>
        <Link to="/Utilisateurs" className="link1">Liste Utilisateurs</Link>
        <Link to="/Formulaire" className="link1">Nouvel Utilisateurs</Link>
      </div>
      );
    }
  }
  
  export default Admin;