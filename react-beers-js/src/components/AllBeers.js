import React, { Component } from 'react';
import './AllBeers.css';

import { Link } from "react-router-dom";

import beerService from '../services/beerService';

import Header from './Header';
import BeerBox from './BeerBox';

class AllBeers extends Component {

    state = {
        beers: [],
        loading: true,
      }

    async componentDidMount() {
        try {
          const beers = await beerService.getAllBeers()  
          this.setState({
            beers,
            loading: false
          })
        } catch (error) {
          console.log(error);
        }
    }
    

    render() {
        const { beers, loading } = this.state;
        return (
            <div>
                <Header/>
                {!loading && beers.map((beer, index) => {
                    return (
                        <Link className="link-to-beer" to={`/beers/${beer._id}`} key={`${beer.name}-${index}`}>
                            <BeerBox image={beer.image_url} name={beer.name} tagline={beer.tagline} contributed_by={beer.contributed_by}/>
                        </Link>
                        )
                })}
                
                {loading && <div className="loading">Loading...</div>}
            </div>
        )
    }
}

export default AllBeers;
