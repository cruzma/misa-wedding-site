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
                    <div class="elfsight-app-b59ea761-94d3-4aff-9617-0d2bbc769ccc"></div>
                </>
            </section>
            <section>
                <h3>Follow</h3>
                <div className="social-logo-group">
                    <a href="https://www.instagram.com/mlcruzin/"><img className='image-fit' src={require("../../assets/images/instagram.svg").default}/></a>
                    <a href="https://twitter.com/mlcruzin"><img className='image-fit' src={require("../../assets/images/twitter.svg").default}/></a>
                    <a href="https://www.facebook.com/cruzin4life"><img className='image-fit' src={require("../../assets/images/facebook.svg").default}/></a>
                </div>
            </section>
            

        </footer>
    )
}

export default Footer;