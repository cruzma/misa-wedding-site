import React from 'react';

import './kind-words.css';

function Kindwords(prop){
    return(
        <div className="wrapper fade-in">
            <div className="story-pitch">
                <h1>Kind Words</h1>
                <div className="top-para-container">
                    <p>I'm so grateful for the amazing couples that I get to work with. I'm the luckiest planner ever to get kind words like these :)</p>
                </div>
            </div>
            <div className="kindwords-container">
                <div className="kindwords-row kindwords-right">
                    <div className="client-words">
                        <h1>Benjamin & Melina</h1>
                        <p>It was so fun working with Lorena! She is lighthearted, funny and warm. She cares deeply about making your dreams become reality and she worked tirelessly to make that happen for us. Her attention to detail, her love for weddings, and her ability to connect with her clients makes her a great choice.</p>
                    </div>
                    
                    <img className="image-size" src={require("../../assets/images/MelinaBen.jpg").default} alt="waves crash into feet of bride and groom while on the beach"></img>
                </div>
                <div className="kindwords-row kindwords-left">
                    <div className="client-words">
                        <h1>Mateo & Cassie</h1>
                        <p>Lorena was everything we needed in the midst of planning our big day! She's an organization queen, with a keen eye for detail. She not only brought to life our vision but also brought her own wealth of knowledge to help make our day run super smooth. Can't thank her enough and highly recommend her for anyone looking for a planner.</p>
                    </div>
                    <img className="image-size" src={require("../../assets/images/MateoCass.jpg").default} alt="Bride and groom holding hands in a well lit room"></img>
                </div>
            </div>
        </div>
    )
}

export default Kindwords;