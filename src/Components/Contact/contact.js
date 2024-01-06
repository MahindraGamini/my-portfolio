// React Component (Contacte.js)
import React, { useRef } from "react";
import './contact.css';
import Insta from './../../Assests/i.png';
import Gmail from './../../Assests/email.png';
import LinkedIn from './../../Assests/linkedin.png';
import Twitter from './../../Assests/twitter.png';
import emailjs from '@emailjs/browser';
import lets from './../../Assests/cont.png';

const Contacte = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_i78vtmt', 'template_8176omo', form.current, 'QIL4BKC3AK9s_th3w')
            .then((result) => {
                console.log("Email sent successfully:", result.text);
            })
            .catch((error) => {
                console.log("Error sending email:", error.text);
            });
    };

    return (
        <section id="contactPage">
           
            <div className="contact">
                <h1 className="contactpagetitle">Contact Me</h1>
                <span className="contactDesc">Please fill this form to discuss work opportunities.</span>
                <form className="contactform" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name="your_name" required/>
                    <input type="email" className="email" placeholder="Your Email" name="your_email" required/>
                    <textarea className="msg" rows={5} name="message" placeholder="Enter Your Message..." required/>
                    <button type="submit" value='send'  >Submit</button>
                    
                </form>
                <div className="links">
                    <a href="https://www.instagram.com/mahindra0745/" target="_blank" rel="noopener noreferrer"><img src={Insta} alt="Instagram" className="link" /></a>
                    <a href="mailto:saimahindra06@gmail.com"><img src={Gmail} alt="Gmail" className="link" /></a>
                    <a href="https://linkedin.com/in/mahindra-gamini-73b8b9219/" target="_blank" rel="noopener noreferrer"><img src={LinkedIn} alt="LinkedIn" className="link" /></a>
                    <a href="https://twitter.com/SaiMahindra2" target="_blank" rel="noopener noreferrer"><img src={Twitter} alt="Twitter" className="link" /></a>
                </div>
            </div>
        </section>
    );
}

export default Contacte;
