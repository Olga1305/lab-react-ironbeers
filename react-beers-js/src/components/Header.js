import React from 'react';
import './Header.css';
import home from '../img/home.png';

import { Link } from "react-router-dom";

const Header = () => {
    
    return (
        <div className="Header">
            <Link to="/">
                <img src={home} alt="home-icon"></img>
            </Link>
                
        </div>
    )
    
}

export default Header;
