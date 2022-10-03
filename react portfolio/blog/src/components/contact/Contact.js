import React from "react";
import './contact.css';
import {AiOutlineMail} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiOutlineWhatsApp} from 'react-icons/ai';
import  { useRef } from 'react';
import emailjs from 'emailjs-com'
function Contact(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wa4jyhq', 'template_xhz8sy6', form.current, 'JQoc8eQ8hmfAWygd3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

<section id="contact">
                    <h5>Get in touch</h5>
                    <h2>Contact Me</h2>
                    <div className="contaienr contact_container">
                                   <div className="content_options">
                          <article className="content_option">
                                        < AiOutlineMail className="content_option-icon"/>
                                        <h4>Email</h4>
                                        <h5>razaammar582@gmail.com</h5>
                                        <a href="mailto:razaammar582@gmail.com" target='_blank'>Send Message</a>
                                        </article>      

                                                               <article className="content_option">
                                        
                                            <AiOutlineInstagram className="content_option-icon"/>
                                        <h4>Instagram</h4>
                                        <h5>Amaar Raza</h5>
                                        <a href="#" target='_blank'>Send Message</a>
                                        </article>      

                          <article className="content_option">
                                        
                                              <AiOutlineWhatsApp className="content_option-icon"/>
                                        <h4>Watsapp </h4>
                                        <h5>+923323498326</h5>
                                        <a href="#" target='_blank'>Send Message</a>
                                        </article>      
                                        
                                        </div>

                                        <form ref={form} onSubmit={sendEmail}>
                                          <input type='text' name="name" placeholder='your full name' required/>
                                          <input type='email' name="email" placeholder='your Email' required/>
                                          <textarea name="message" placeholder="your message" required></textarea>
                                             <button type='submit' className='btn btn-primary'>Send Message</button>
                                        </form>     
                    </div>
                                        </section>                    
)

}

export default Contact;