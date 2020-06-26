import React, { useState } from 'react';
import './Header.scss';

//This is the default page -- the CIRRUS logo links back to it -- it displays the users closest air quality based on IP address and sets the routing for the app

function Header() {
    const [menuStatus, setMenuStatus] = useState(false)

    const handleMenuToggle = () => {
        if(menuStatus === false) {
            setMenuStatus(true)
         } else {
            setMenuStatus(false)
         }
    }
    
    return (
        <header>
            <nav className='navflex'>
                <h1>CIRRUS</h1>
                <div className={`hamburger-btn ${menuStatus ? 'open' : ''}`} onClick={handleMenuToggle}>
                    <div className="hamburger-patty"></div>
                </div>
            </nav>
            
        </header>
    );
}

export default Header;