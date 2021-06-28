import React from 'react';

import './contact-styling.css';

function Contact(prop){
    return(
        <section className="wrapper wrapper-fix contact-wrapper-fix fade-in">
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
                <div className="image-container"><img src={require("../../assets/images/DSCF5136.jpg").default} alt="bride and groom holding hands"></img></div>
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
                    <p>How can i help:</p>
                    <div>
                        <input type="radio" id="full" name="service" value="full"/>
                        <label for="full">full planning</label><br></br>
                        <input type="radio" id="partial" name="service" value="partial"/>
                        <label for="partial">&nbsp; partial planning</label><br></br>
                        <input type="radio" id="dayOf" name="service" value="dayOf"></input>
                        <label for="dayOf">&nbsp; Day of Coordination</label>
                    </div>
                    <label for="date">Wedding Date</label>
                    <input type="text" id="date" name="date"></input>
                    <label for="about">Tell me about the big day!</label>
                    <textarea type="text" id="about" name="about" rows="20"></textarea>
                    <label for="instagram">Instagram</label>
                    <input type="text" id="instagram" name="instagram"></input>
                    <input type="submit" value="Submit" class="input-submit"></input>

                </form>
            </div>
        </section>
    )
}

export default Contact;