import React from 'react';
import './header-style.css'

function Header(props) {

    const {
        setHomeSelected,
        setAboutSelected,
        setStoriesSelected,
        setServicesSelected,
        setContactsSelected,
        setKindwordsSelected
    } = props

  return (
    <header>
        <div className="topNews">
            <h3>Now Booking for 2021/2022</h3>
        </div>
        <div className="backgroundImageContainer headerWidth">
            <div>
                <img src={require("../../assets/images/Official Logo_Black No Background.jpg").default} alt=""/>
            </div>
        </div>
        <nav className="headerWidth">
            <ul>
                <li><a href="#" onClick={() => {
                    setHomeSelected(true);
                    setAboutSelected(false);
                    setStoriesSelected(false);
                    setServicesSelected(false);
                    setContactsSelected(false);
                    setKindwordsSelected(false);
                }}>Home</a></li>
                <li><a href="#" onClick={() => {
                    setHomeSelected(false);
                    setAboutSelected(true);
                    setStoriesSelected(false);
                    setServicesSelected(false);
                    setContactsSelected(false);
                    setKindwordsSelected(false);
                }}>About</a></li>
                <li><a href="#" onClick={() => {
                    setHomeSelected(false);
                    setAboutSelected(false);
                    setStoriesSelected(false);
                    setServicesSelected(true);
                    setContactsSelected(false);
                    setKindwordsSelected(false);
                }}>Services</a></li>
                <li><a href="#" onClick={() => {
                    setHomeSelected(false);
                    setAboutSelected(false);
                    setKindwordsSelected(true);
                    setStoriesSelected(false);
                    setServicesSelected(false);
                    setContactsSelected(false);
                }}>Kind Words</a></li>
                <li><a href="#" onClick={() => {
                    setHomeSelected(false);
                    setAboutSelected(false);
                    setStoriesSelected(true);
                    setServicesSelected(false);
                    setContactsSelected(false);
                    setKindwordsSelected(false);
                }}>Stories</a></li>
                <li><a href="#" onClick={() => {
                    setHomeSelected(false);
                    setAboutSelected(false);
                    setStoriesSelected(false);
                    setServicesSelected(false);
                    setContactsSelected(true);
                    setKindwordsSelected(false);
                }}>Contact</a></li>
            </ul>
        </nav>

        
   </header>
  )
}

export default Header;