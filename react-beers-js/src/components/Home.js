import React from 'react';
import './Home.css';

import { Link } from "react-router-dom";
import MenuBox from './MenuBox';
import allBeers from '../img/beers05.jpeg';
import randomBeer from '../img/beers13.jpg';
import newBeer from '../img/beers11.jpg';

const beersMenu = [
    {link: '/beers', img: allBeers, title: 'All Beers', description: 'Aute esse nisi nulla qui sunt ad reprehenderit ad est officia incididunt.'},
    {link: '/beers/random', img: randomBeer, title: 'Random Beer', description: 'Reprehenderit laborum et culpa sunt consectetur amet laboris sit do proident deserunt quis.'},
    {link: '/beers/newbeer', img: newBeer, title: 'New Beer', description: 'Labore id aute reprehenderit eiusmod excepteur ea. Culpa ad est ex proident.'}
]

const Home = props => {
    
        return (
            <div className="Home">
                {beersMenu.map((item, index) => {
                    return (
                        <Link className="menu-link" to={`${item.link}`} key={`${item.title}-${index}`}>
                            <MenuBox img={item.img} title={item.title} description={item.description}/>
                        </Link>
                        )
                })}
                
            </div>
        )
    
}

export default Home;