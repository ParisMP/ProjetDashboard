import React from 'react';
<<<<<<< HEAD


=======
import Formulaire from './Formulaire';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import './Admin.css';
>>>>>>> 30c34ed547273f69970a7f04cbc09794bd991b60


class Admin extends React.Component{ 
  
    render(){
      return( 
      <div>
<<<<<<< HEAD
          console.log("salut");
          
        
    
=======
         
        <h3>Bienvenue dans l'espace admin !</h3>
        <Row>
          <Col sm={{ size: 3, offset: 4 }}><Link to="/Utilisateurs" className="utilisateur">Liste Utilisateurs</Link></Col>
          <Col sm={3}><Link to="/Formulaire" className="formulaire">Nouvel Utilisateurs</Link></Col>
        </Row>
>>>>>>> 30c34ed547273f69970a7f04cbc09794bd991b60
      </div>
      );
    }
  }
  
  export default Admin;