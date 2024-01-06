import React from "react";
import "./contact.css";

const Contact = () => {

    return (
        <section className="contact" id="contact">
            <section className="contact__header">
                <section className="contact__header--text">
                    <section className="contact__header--text--title">
                        Contact Me 
                    </section>
                </section>
                <section className="contact__header--item">
                    <img src="images/logo/github_logo.png" alt="github_logo" className="contact__header--img"/>
                    <img src="images/logo/linkedin_logo.png" alt="linkedin_logo" className="contact__header--img"/>
                    <img src="images/logo/email_logo.png" alt="email_logo" className="contact__header--img"/>
                    <img src="images/logo/phone_logo.png" alt="phone_logo" className="contact__header--img"/>
                </section>
            </section>
            <section className="contact__body">
                <section className="contact__body--container">
                    <form className="contact__body--form">
                        <section className="contact__body--form--item">
                            <label for="name">Your Name</label>
                            <input type="text" id="name" name="name" placeholder="Your name.." />
                        </section>
                        <section className="contact__body--form--item">
                            <label for="email">Your Email</label>
                            <input type="email" id="email" name="email" placeholder="Your email.." />
                        </section>
                        <section className="contact__body--form--item">
                            <label for="message">Your Message</label>
                            <textarea id="message" name="message" placeholder="Write something.." style={{height:"5rem"}}></textarea>
                        </section>
                        <section className="contact__body--form--item">
                            <input type="submit" value="Submit" />
                        </section>
                    </form>
                </section>
            </section>
        </section>
    );
};

export default Contact;