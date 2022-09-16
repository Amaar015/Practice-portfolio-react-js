import React from "react";
import './experience.css';
import {BsPatchCheck} from "react-icons/bs";
function Experience(){
return (
<section id="experience">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
        <div className="container experience-container">
                <div className="experience-frontend">
                <h3>Frontend Development</h3>
                        <div className="expereince-content">
                                <article className="experience-details">
                                    <BsPatchCheck className="experience-details-icon" />
                                    <div>
                                    <h4>HTML</h4>
                                    <small className="text-light">Experienced</small>
                                    </div>
                                </article>
                                <article className="experience-details">
                                    <BsPatchCheck className="experience-details-icon"/>
                                    <div>                             
                                              <h4>CSS</h4>
                                    <small className="text-light">Intermediate</small>
                                    </div>
 
                                </article>
                                <article className="experience-details">
                                    <BsPatchCheck className="experience-details-icon"/>
                                    <div>
                                    <h4>Javascript</h4>
                                    <small className="text-light">Experienced</small>
                                    </div>
                                </article>
                                <article className="experience-details">
                                    <BsPatchCheck className="experience-details-icon"/>
                                    <div>
                                    <h4>Bootstrap</h4>
                                    <small className="text-light">Experienced</small>
                                    </div>                           
                                </article>
                                <article className="experience-details">
                                    <BsPatchCheck className="experience-details-icon"/>
                                    <div>
                                    <h4>tailwind</h4>
                                    <small className="text-light">Experienced</small>
                                    </div>
                                </article> 
                                <article className="experience-details">
                                    <BsPatchCheck className="experience-details-icon"/>
                                    <div>
                                    <h4>React.js</h4>
                                    <small className="text-light">Experienced</small>
                                    </div>
                                </article>
                        </div>
                </div>
                <div className="experience-backend">
                        <h3>Backend Development</h3>
                        <div className="expereince-content">
                                <article className="experience-details">
                                    <BsPatchCheck className="experience-details-icon"/>
                                    <div>
                                    <h4>Node js</h4>
                                    <small className="text-light">Experienced</small>
                                    </div>
                                </article>
                                <article className="experience-details">
                                    <BsPatchCheck className="experience-details-icon"/>
                                    <div>
                                    <h4>MongoDb</h4>
                                    <small className="text-light">Intermediate</small>
                                    </div>
                                </article>
                                <article className="experience-details">
                                    <BsPatchCheck className="experience-details-icon"/>
                                    <div>
                                    <h4>PHP</h4>
                                    <small className="text-light">Experienced</small>
                                    </div>
                                </article>
                                <article className="experience-details">
                                    <BsPatchCheck className="experience-details-icon"/>
                                    <div>
                                    <h4>SQL</h4>
                                    <small className="text-light">Experienced</small>
                                    </div>
                                </article>
                                <article className="experience-details">
                                    <BsPatchCheck className="experience-details-icon"/>
                                    <div>
                                    <h4>Python</h4>
                                    <small className="text-light">Experienced</small>
                                    </div>
                                </article>
                                
                        </div>
                </div>
        </div>

</section>
)
}

export default Experience;


                    