import React from 'react';

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
        <form>

          <h3>Nouveau Utilisateur</h3>

          <label>
            <h5>Localisation: </h5>
            <input type="text" localisation={this.state.localisation} onChange={this.handleChange} />
          </label>

          <label>
            <h5>Nombre de personnes dans la maison: </h5>
            <input type="number" nb={this.state.nb} onChange={this.handleChange} />
          </label>

          <label>
            <h5>Taille de la maison: </h5>
            <select taille={this.state.taille} onChange={this.handleChange}>
            <option taille="small">Small</option>
            <option taille="medium">Medium</option>
            <option taille="big">Big</option>
          </select>

          </label>
          
          <input type="submit" localisation ="submit" nb="submit" taille="Submit" />
          
        </form>
      );
    }
  }
  export default Formulaire;