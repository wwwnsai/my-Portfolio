import React, { useState } from "react";
import axios from "axios";
import "./contact.css";

const Contact = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(
            "https://sheet.best/api/sheets/01ea3284-7603-48d9-842c-e999615131c9",
            form
            ).then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
            

        setForm({name: "", email: "", message: ""});
    };

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
                    <form className="contact__body--form" onSubmit={handleSubmit}>
                        <section className="contact__body--form--item">
                            <div className="contact__body--form--item--div">
                                <label className="form__label">Your Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    onChange={handleChange}
                                    value={form.name} 
                                    className="form__input" 
                                    placeholder="Your name" />
                            </div>

                            <div className="contact__body--form--item--div">
                                <label className="form__label">Your Email</label>
                                <input 
                                    type="text" 
                                    name="email" 
                                    onChange={handleChange}
                                    value={form.email} 
                                    className="form__input" 
                                    placeholder="Your email" />
                            </div>
                        </section>

                        <div className="contact__body--form--item--div">
                            <label className="form__label">Your Message</label>
                            <textarea 
                                className="form__input" 
                                name="message" 
                                onChange={handleChange}
                                value={form.message} 
                                id="YourMessage" 
                                placeholder="Your message..." />
                        </div>

                        <div className="contact__body--form--item--div">
                            <button type="submit" className="form__button">Send Message</button>
                        </div>

                    </form>
                </section>
            </section>
        </section>
    );
};

export default Contact;