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
                <>
                <script src="https://apps.elfsight.com/p/platform.js" defer></script>
                <div class="elfsight-app-acbe1690-693a-43e6-b5fd-0ee440e64b44"></div>
                </>
            </section>
            <section>
                <h3>Follow</h3>
                <div className="social-logo-group">
                    <a href="#"><img src={require("../../assets/images/instagram.svg").default}/></a>
                    <a href="#"><img src={require("../../assets/images/twitter.svg").default}/></a>
                    <a href="#"><img src={require("../../assets/images/facebook.svg").default}/></a>
                </div>
            </section>
            

        </footer>
    )
}

export default Footer;