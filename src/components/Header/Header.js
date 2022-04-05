import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className="container bg">
            <div className="menu">
                <Link to='/home' className="dfr-color-a menu-link menu-link-left">Home</Link>

                <Link to='/reviews' className="dfr-color-a menu-link">Reviews</Link>
                <Link to='/dashboard' className="dfr-color-a menu-link">Dashboard</Link>
                <Link to='/blog' className="dfr-color-a menu-link">Blog</Link>
                <Link to='/contact' className="dfr-color-a menu-link">Contact</Link>
            </div>
        </div>
    );
};

export default Header;