import React from 'react';
import './header-style.css'

function Nav(Props) {

  return (
    <header>
        <div className="topNews">
            <h3>Now Booking for 2021/2022</h3>
        </div>
        <div className="backgroundImageContainer headerWidth">
            <div>
                <img src={require("../../assets/images/Official Logo_Black No Background.jpg").default}/>
            </div>
        </div>
        <nav className="headerWidth">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Kind Words</a></li>
                <li><a href="#">Stories</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>

        
   </header>
  )
}

export default Nav;