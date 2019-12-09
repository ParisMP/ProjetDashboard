import React from 'react';
import './Formulaire.css';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Formulaire extends React.Component {
    constructor(props) {
      super(props);
      this.state = {localisation: '', nb: '', taille: ''};
  
      this.handleChange = this.handleChange.bind(this);
    
    }
  
    handleChange(event) {
      this.setState({localisation: event.target.localisation});
      this.setState({nb: event.target.nb});
      this.setState({taille: event.target.taille});

    }
  
    render() {
      return (
        <Form>

          <h3>Nouvel utilisateur</h3>

          <FormGroup row>
            <Label for="exampleEmail" sm={{ size: 3, offset: 2 }}>Localisation de la maison : </Label>
            <Col sm={4}>
              <Input type="text" name="localisation" localisation={this.state.localisation} onChange={this.handleChange} id="exampleEmail" placeholder="37 quai de grenelle 75015 Paris" />
            </Col>
          </FormGroup>
  
          <FormGroup row>
            <Label for="examplePassword" sm={{ size: 3, offset: 2 }}>Nombre personne dans la maison : </Label>
            <Col sm={4}>
              <Input type="number" nb={this.state.nb} onChange={this.handleChange} name="nb" id="nb"/>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="Taille" sm={{ size: 3, offset: 2 }}>Taille de la maison : </Label>
            <Col sm={4}>
              <Input type="select" taille={this.state.taille} onChange={this.handleChange} name="select" id="exampleSelect">
              <option taille="small">Small</option>
              <option taille="medium">Medium</option>
              <option taille="big">Big</option>
              </Input>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col sm={{ size: 10, offset:5 }}>
              <Button type="submit" localisation ="submit" nb="submit" taille="Submit">Valider</Button>
            </Col>
          </FormGroup>
          
          
          
        </Form>
      );
    }
  }
  export default Formulaire;