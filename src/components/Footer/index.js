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
                    <a href="#"><img src="./assets/images/instagram.svg"/></a>
                    <a href="#"><img src="./assets/images/twitter.svg"/></a>
                    <a href="#"><img src="./assets/images/facebook.svg"/></a>
                </div>
            </section>
            

        </footer>
    )
}

export default Footer;