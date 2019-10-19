import React, { Component } from 'react';
import './BeerDetail.css';

import beerService from '../services/beerService';

import Header from './Header';


class BeerDetail extends Component {

    state = {
        beer: undefined,
        loading: true,
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        try {
          const beer = await beerService.getOneBeer(id)  
          this.setState({
            beer,
            loading: false
          })
        } catch (error) {
          console.log(error);
        }
    }
    

    render() {
        const { beer, loading } = this.state;
        return (
            <div className="BeerDetail">
                <Header/>
                {!loading && 
                  <div>
                    <div className="detail-image">
                        <img src={beer.image_url} alt="beer"/>
                    </div>
                    <div className="detail-info">
                        <div className="title">
                            <h2>{beer.name}</h2> 
                            <h2 className="grey">{beer.attenuation_level}</h2>
                        </div>
                        <div className="subtitle">
                            <h3 className="grey">{beer.tagline}</h3>
                            <h3>{beer.first_brewed}</h3>
                        </div>                        
                        <p>{beer.description}</p>
                        <p className="grey">{beer.contributed_by}</p> 
                    </div>  
                  </div>                    
                }
                
                {loading && <div className="loading">Loading...</div>}
            </div>
        )
    }
}

export default BeerDetail;