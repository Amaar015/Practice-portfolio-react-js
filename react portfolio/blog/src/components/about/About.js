import React from "react";
import './about.css';
import Me from "../../images/Me.jpeg";
import {BsCodeSquare} from "react-icons/bs";
import {AiFillContacts} from "react-icons/ai";
import {AiFillProject} from "react-icons/ai";
function About(){
return (
                    <section id="about">
             <h5>Get To Know</h5>
             <h2>About Me</h2>
             <div className="container about_container">
                    <div className="about_me">
                                        <div className="about_me-image">
                                                            <img src={Me}></img>
                                        </div>
                                        </div>
                    
                                       <div className="about_content">
                                        <div className="about_cards">
                                           <article className="about_card">
                                               <i><BsCodeSquare/></i>
                                               <h5>Experience</h5>
                                               <small>3+ Years Working</small>
                                           </article>

                                           <article className="about_card">
                                               <i><AiFillContacts/></i>
                                               <h5>Client</h5>
                                               <small>200+ worldwide</small>
                                           </article>

                                           <article className="about_card">
                                               <i><AiFillProject/></i>
                                               <h5>Projects</h5>
                                               <small>80+ Completed</small>
                                           </article>
                                        </div>
                                          <p>
                                          intended for educational/teaching purpose, offered free of cost to the students for use under special 
                                           circumstances of Online Education due to COVID-19 Lockdown situation and may include
                                           copyrighted material - the use of which may not have been specifically 
                                          </p>
                                              <a href="#contact" className="btn btn-primary">Let's Talk</a>
                                        </div>

             </div>

</section>
)

}

export default About;