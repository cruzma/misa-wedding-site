import React from 'react';
import './stories-styling.css';
import { Link } from 'react-router-dom';


function Stories(prop){

    

    return(
        <div className="wrapper fade-in">
            <div className="story-pitch">
                <h1>Stories</h1>
                <div className="para-container">
                    <p>Every wedding and every event tells it's own story. I'm grateful that I got to be a part of these, and make dreams and passions come to life!</p>
                </div>
            </div>
            <div className="story-container first-story">
                <div className="centered">
                    <div>
                        <h1>Minimalist boho style shoot</h1>
                        <p>June 18 2019 | Guild Inn Estate</p>
                        <Link to='/Boho' className="gallery-container">
                           View Gallery 
                        </Link>
                        
                    </div>
                </div>
                <img src={require("../../assets/images/MateoCass.jpg").default} alt="bride and groom holding hands in a well lit area"></img>

            </div>
            <div className="story-container last-story">
                <div className="centered">
                    <div>
                        <h1>Coming Soon</h1>
                    </div>
                </div>
                <img src={require("../../assets/images/MelinaBen.jpg").default} alt="waves crashing on the feet of the brise and groom by the beach"></img>
            </div>
        </div>
    )
}

export default Stories;