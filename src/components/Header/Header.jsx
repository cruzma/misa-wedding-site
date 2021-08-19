import React, { useState } from 'react';
import './header-style.css'
import { Link } from 'react-router-dom';

function Header(props) {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);



  return (
    <header>
        <div className="topNews">
            <h3>Now Booking for 2021/2022</h3>
        </div>
        <div className="backgroundImageContainer headerWidth">
            <div>
                <img className='image-fit' src={require("../../assets/images/Official Logo_Black No Background.jpg").default} alt=""/>
            </div>
        </div>
        <nav className="headerWidth">
        <div class="burger-icon" onClick={handleClick}>
                <div></div>
                <div></div>
                <div></div>
        </div>
            <ul className={click ? "link-list active" : "link-list"}>
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/About' >About</Link></li>
                <li><Link to='/Services' >Services</Link></li>
                <li><Link to='/Kind-words'>Kind Words</Link></li>
                <li><Link to='/Stories' >Stories</Link></li>
                <li><Link to='/Contact' >Contact</Link></li>
            </ul>
 
        </nav>

        
   </header>
  )
}

export default Header;