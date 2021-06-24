import React from 'react';

import './contact-styling.css';

function Contact(prop){
    return(
        <section className="wrapper">
            <div className="left-side">
                <div className="hours-container">
                    <p>instagram</p>
                    <p>twitter</p>
                    <p>email</p>

                    <h3>Hours</h3>
                    <p>Monday: 9-6</p>
                    <p>Tuesday: 9-1</p>
                    <p>Wednesday: 9-1</p>
                    <p>Thursday: 9-1</p>
                    <p>Friday: 9-6</p>
                    <p>Saturday: 9-6</p>
                    <p>Sunday: Out of Office</p>
                </div>
                <div></div>
            </div>
            <div className="right-side">
                <h1>Connect</h1>
                <form className="input-container">
                    <label for="fname">Bride:</label>
                    <input type="text" id="bride" name="bride"/>
                    <label for="groom">Groom:</label>
                    <input type="text" id="groom" name="groom"/>
                    <label for="email">Email</label>
                    <input type="text" id="email" name="email"/>
                    <label for="phone">Phone</label>
                    <input type="text" id="phone" name="phone"></input>
                    <p>How can i help</p>
                    <input type="radio" id="html" name="fav_language" value="HTML"/>
                    <label for="html">full planning</label>
                    <input type="radio" id="css" name="fav_language" value="CSS"/>
                    <label for="css">partial planning</label>
                    <input type="radio" id="javascript" name="fav_language" value="JavaScript"></input>
                    <label for="javascript">Day of Coordinarion</label>
                    <label for="date">Wedding Date</label>
                    <input type="text" id="date" name="date"></input>
                    <label for="about"></label>
                    <textarea type="text" id="about" name="about"></textarea>
                    <label for="instagram">Instagram</label>
                    <input type="text" id="instagram" name="instagram"></input>

                </form>
            </div>
        </section>
    )
}

export default Contact;