import React from 'react';
import './boho-style.css';
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";

function Boho(prop){

    // const BasicRows = () => <Gallery photos={photos} />;
    // render(<BasicRows />, document.getElementsByClassName('boho-row-gallery'));

    return(
        <section className="wrapper wrapper-fix">
            <div className="boho-title">
                <h1>Minimalist Boho Style Shoot</h1>
                <h3>The Guild Inn Estate</h3>
                <h3>June 18th, 2019</h3>
            </div>
            <div className="boho-description">
                <div>
                    <p>
                    My vision for this shoot was minimal decor, with pops of dark moody colours of the flowers and wood. I got lovely bohemian vibes from the intricate "messy bun" look and the wide circle bottom of the white chiffon dress on our bride. The beautiful minimalist feels came from the naked cake (with it's pop of colour from the flowers) and the clear plates atop the gorgeous white vintage tables. Being surrounded by such a talented group of people can be intimidating, but everyone I got to work with were kind, supportive, and a joy to be around. This was a special shoot to me for two reasons. The first being my brother and his then fiancee modeling for the shoot. It was so sweet as they got "pre-wedding" nerves, and happily were lovey dovey together in front of the camera. The second reason was that it was my first style shoot. While I've assisted in style shoots prior, this was the first one I planned on my own - and I couldn't have been more happy with it! I'm grateful for everyone's support to achieve such a successful first style shoot. I hope you all take the time to not only admire the photos, but to also appreciate and support the hard work that each of these business owners are doing! Check them out!
                    </p>
                </div>
                
                <div className="boho-shoutouts">
                    <p>Photography by Kyrollos Productions</p>
                    <p>Hair by Mane by Anna</p>
                    <p>Rentals by Vintage Rentals and Events</p>
                    <p>Makeup by Cassie Jim</p>
                    <p>Cakes by Samantha's Cake Shop</p>
                    <p>Dress by White Studio Bridal</p>
                    <p>Planning by me!</p>
                </div>

                <div className="boho-shoutouts">
                    <p>
                    (Shoutout to my "assistants" for the day: Gabbie, Mark, Seun, Mateo and my parents, who helped make the entire day run smoothly and on time! A special thanks also for your continuous support)
                    </p>
                </div> 
            </div>

            <div itemID='photo-gallery-boho'>
                <Gallery photos={photos} /> 

            </div>
        </section>
    )
        
}

export default Boho;