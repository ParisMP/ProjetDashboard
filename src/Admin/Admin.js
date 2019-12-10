import React from 'react';
import Formulaire from './Formulaire';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import './Admin.css';


class Admin extends React.Component{ 
  
    render(){
      return( 
      <div>
         
        <h3>Bienvenue dans l'espace admin !</h3>
        <Row>
          <Col sm={{ size: 3, offset: 4 }}><Link to="/Utilisateurs" className="utilisateur">Liste Utilisateurs</Link></Col>
          <Col sm={3}><Link to="/Formulaire" className="formulaire">Nouvel Utilisateurs</Link></Col>
        </Row>
      </div>
      );
    }
  }
  
  export default Admin;