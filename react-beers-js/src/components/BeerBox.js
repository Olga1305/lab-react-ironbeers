import React from 'react';
import './BeerBox.css';

const BeerBox = props => {
    
        return (
            <div className="BeerBox">
                <div className="beer-image">
                    <img src={props.image} alt="beer"/>
                </div>
                <div className="beer-info">
                    <h2>{props.name}</h2>
                    <h3>{props.tagline}</h3>
                    <p><span>Created by:</span> {props.contributed_by}</p> 
                </div>   
                
            </div>
        )
    
}

export default BeerBox;
