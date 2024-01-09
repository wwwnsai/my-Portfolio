import React, { useState } from "react";
import axios from "axios";
import "./contact.css";
import "./responsive.css";

const Contact = () => {
    const logoData = [
        {
            id: 1,
            logo_name: "GitHub",
            information: "github.com/wwwnsai",
            link: "https://github.com/wwwnsai",
        },
        {
            id: 2,
            logo_name: "LinkedIn",
            information: "Thanyanit Poothong",
            link: "https://www.linkedin.com/in/thanyanit-poothong-537520282/",
        },
        {
            id: 3,
            logo_name: "Email",
            information: "pthanyanit@gmail.com",
            link: "mailto:pthanyanit@gmail.com",
        },
        {
            id: 4,
            logo_name: "Phone",
            information: "+66 87-090-2673",
            link: "tel:+66870902673",
        },
    ];
  
    const [hoveredLogo, setHoveredLogo] = useState(null);
  
    const handleLogoHover = (logoId) => {
      setHoveredLogo(logoId);
    };
  
    const handleLogoLeave = () => {
      setHoveredLogo(null);
    };
  
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
  
      axios
        .post(
          "https://sheet.best/api/sheets/01ea3284-7603-48d9-842c-e999615131c9",
          form
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
  
      setForm({ name: "", email: "", message: "" });
    };
  
    return (
        <section className="contact" id="contact">
            <section className="contact__header">
                <section className="contact__header--text">
                    <section className="contact__header--text--title">Contact Me</section>
                </section>
                <section className="contact__header--item">
                    {logoData.map((logo) => (
                        <div
                        key={logo.id}
                        onMouseEnter={() => handleLogoHover(logo.id)}
                        onMouseLeave={handleLogoLeave}
                        >
                            <a href={logo.link}>
                            <img
                                src={`images/logo/${logo.logo_name.toLowerCase()}_logo.png`}
                                alt={`${logo.logo_name} Logo`}
                                className="contact__header--img"
                            />
                            </a>
                            {hoveredLogo === logo.id && (
                                <h4 className="logo-info">{logo.information}</h4>
                            )}
                        </div>
                    ))}
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