import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Header.scss';

function Header(props) {

    const [menuStatus, setMenuStatus] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

    const handleMenuToggle = (e) => {
        if(menuStatus === false && showMenu === false) {
            setMenuStatus(true)
            setShowMenu(true)
         } else {
            setMenuStatus(false)
            setShowMenu(false)
         }
    }

    const themeToggle = props.themeToggle
    
    return (
        <header>
            <nav className='navflex'>
                <Link to="/" id="home" className='header-item'>
                    <h1 id='logo' onClick={showMenu ? handleMenuToggle : null}>CIRRUS</h1>
                </Link>

                <Link to="/search-city" id="search" className='header-item'>
                    <h1 className="nav-link-desktop" id="nav-one" onClick={handleMenuToggle}>Search City</h1>
                </Link>

                <Link to="/about" id="about" className='header-item'>
                    <h1 className="nav-link-desktop" id="nav-two" onClick={handleMenuToggle}>About Cirrus</h1>
                </Link>

                <h1 onClick={() => themeToggle.toggle()} className='nav-link-desktop' id='nav-three'>
                    DarkMode
                </h1>

                <div className={`hamburger-btn ${menuStatus ? 'open' : ''}`} onClick={handleMenuToggle}>
                    <div className="hamburger-patty"></div>
                </div>
            </nav>

            <div className={`dropdown-menu ${showMenu ? 'show' : ''}`}>
                <Link to="/search-city" id="search" className='header-item'>
                    <h1 className="nav-link" id="nav-one" onClick={handleMenuToggle}>Search City</h1>
                </Link>

                <Link to="/about" id="about" className='header-item'>
                    <h1 className="nav-link" id="nav-two" onClick={handleMenuToggle}>About Cirrus</h1>
                </Link>

                <h1 onClick={() => themeToggle.toggle()} className='nav-link'>
                    DarkMode
                </h1>
            </div>
        </header>
    );
}

export default Header;