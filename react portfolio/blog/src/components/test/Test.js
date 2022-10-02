import React from "react";
import './testimonial.css';
import client1 from '../../images/profile-2.jpeg';
import client2 from '../../images/profile-3.jpeg';
import client3 from '../../images/profile-4.jpeg';
// import imeg4 from '../../images/port4.png';

function Test(){
return (
<section id="test">
                    <h5>Review From Clients</h5>
                    <h2>Reviews</h2>

                    <div className="container test-container">
                       <article className="test">
                            <div className="client_avatar">
                                        <img src={client2} alt=""/>
                                        <h5 className="client_name">Ali Haider</h5>
                                        <small className="client_review">
                                       Dear User i have good experience in muet and i passed my graduation degree in software
                                       engineering in 2024 and i hope i perfome good wiith my juniors in university.

                                        </small>
                            </div>
                                        </article>    

                                        <article className="test">
                            <div className="client_avatar">
                                        <img src={client3} alt=""/>
                                        <h5 className="client_name">M Hussain</h5>
                                        <small className="client_review">
                                       Dear User i have good experience in muet and i passed my graduation degree in software
                                       engineering in 2024 and i hope i perfome good wiith my juniors in university.

                                        </small>
                            </div>
                                        </article>    

                                        <article className="test">
                            <div className="client_avatar">
                                        <img src={client1} alt=""/>
                                        <h5 className="client_name">Aveen Kumar</h5>
                                        <small className="client_review">
                                       Dear User i have good experience in muet and i passed my graduation degree in software
                                       engineering in 2024 and i hope i perfome good wiith my juniors in university.

                                        </small>
                            </div>
                                        </article>    


                    </div>
</section>
)

}

export default Test;