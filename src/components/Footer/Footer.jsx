import React from 'react';
import './footer-styling.css';

function Footer(props){

    return(
        <footer>
            <section>
                <div>
                    <h3>Book Now</h3>
                </div>
                
                
            </section>
            <section>
                <p>Insta Placeholder</p>
            </section>
            <section>
                <h3>Follow</h3>
                <div class="social-logo-group">
                    <a href="#"><img src={require("../../assets/images/instagram.svg").default}/></a>
                    <a href="#"><img src={require("../../assets/images/twitter.svg").default}/></a>
                    <a href="#"><img src={require("../../assets/images/facebook.svg").default}/></a>
                </div>
            </section>
            

        </footer>
    )
}

export default Footer;