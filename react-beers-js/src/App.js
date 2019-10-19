import React from 'react';
import './App.css';

import { Route, Switch } from "react-router-dom";

import Home from './components/Home';
import AllBeers from './components/AllBeers';
import BeerDetail from './components/BeerDetail';
import Form from './components/Form';

const App = props => {
  
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>              
          <Route exact path="/beers" component={AllBeers} />   
          <Route exact path="/beers/newbeer" component={Form} />  
          <Route exact path="/beers/:id" component={BeerDetail} />  
          <Route exact path="/beers/random" component={BeerDetail} /> 
        </Switch>     
      </div>
    );  
}

export default App;
