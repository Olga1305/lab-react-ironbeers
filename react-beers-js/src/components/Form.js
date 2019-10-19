import React, { Component } from 'react';
import './Form.css';

import beerService from '../services/beerService';
import Header from './Header';


class Form extends Component {

    state = {      
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: '',
      contributed_by: ''
     }
  
    handleChange = (event) => {
        let { name, value } = event.target;    
        this.setState({[name]: value});
    }
  
  
    handleFormSubmit = (event) => {
        event.preventDefault();
        beerService.createBeer(this.state);
        this.setState({
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: '',
            contributed_by: ''
        })
    }
  
    render() {
          return (
              <div>
                  <Header/>
                  <form className="Form" onSubmit={this.handleFormSubmit}>
                      <label>Name:</label><br/>
                      <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br/>
  
                      <label>Tagline:</label><br/>
                      <input type="text" name="tagline" value={this.state.tagline} onChange={this.handleChange} /><br/>
  
                      <label>Description:</label><br/>
                      <input id="textarea" type="textarea" name="description" value={this.state.description} onChange={this.handleChange} /><br/>

                      <label>First Brewed:</label><br/>
                      <input type="date" name="first_brewed" value={this.state.first_brewed} onChange={this.handleChange} /><br/>

                      <label>Brewer Tips:</label><br/>
                      <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={this.handleChange} /><br/>

                      <label>Attenuation Level:</label><br/>
                      <input type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={this.handleChange} /><br/>

                      <label>Contributed By:</label><br/>
                      <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={this.handleChange} /><br/>
  
                      <input className="button" type="submit" value="ADD NEW" />
                  </form>                   
              </div>
          )
    }
  }

export default Form;
