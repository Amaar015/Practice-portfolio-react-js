import React from "react";
import './portfolio.css'
import imeg1 from '../../images/port1.jpg';
import imeg2 from '../../images/port2.png';
import imeg3 from '../../images/port3.png';
import imeg4 from '../../images/port4.png';
import imeg5 from '../../images/port5.jpg';
import imeg6 from '../../images/port6.jpg';
function Portfolio(){
return (

         <section id="portfolio">
              <h5>My Recent Work</h5>
              <h2>Portfolio</h2>
              <div className="container portfolio_container">
                    <article className="portfolio_item">
                        <div className="portfolio_item-image">
                                        <img src={imeg1} alt="image"/>
                        </div>
                        <h3>This is title</h3>
                        <div className="portfolio_item-cta">
                        <a href="" className="btn" target="_blank"> GitHub </a>
                        <a href="" className="btn btn-primary" target="_blank">Live Demo</a>
                        </div>
                    </article>

                    <article className="portfolio_item">
                        <div className="portfolio_item-image">
                                        <img src={imeg2} alt="image"/>
                        </div>
                        <h3>This is title</h3>
                        <div className="portfolio_item-cta">
                        <a href="" className="btn" target="_blank"> GitHub </a>
                        <a href="" className="btn btn-primary" target="_blank">Live Demo</a>
                        </div>
                    </article>
                    <article className="portfolio_item">
                        <div className="portfolio_item-image">
                                        <img src={imeg3} alt="image"/>
                        </div>
                        <h3>This is title</h3>
                        <div className="portfolio_item-cta">
                        <a href="" className="btn" target="_blank"> GitHub </a>
                        <a href="" className="btn btn-primary" target="_blank">Live Demo</a>
                        </div>
                    </article>

                    <article className="portfolio_item">
                        <div className="portfolio_item-image">
                                        <img src={imeg4} alt="image"/>
                        </div>
                        <h3>This is title</h3>
                        <div className="portfolio_item-cta">
                        <a href="" className="btn" target="_blank"> GitHub </a>
                        <a href="" className="btn btn-primary" target="_blank">Live Demo</a>
                        </div>
                    </article>

                    <article className="portfolio_item">
                        <div className="portfolio_item-image">
                                        <img src={imeg5} alt="image"/>
                        </div>
                        <h3>This is title</h3>
                        <div className="portfolio_item-cta">
                        <a href="" className="btn" target="_blank"> GitHub </a>
                        <a href="" className="btn btn-primary" target="_blank">Live Demo</a>
                        </div>
                    </article>

                    <article className="portfolio_item">
                        <div className="portfolio_item-image">
                                        <img src={imeg6} alt="image"/>
                        </div>
                        <h3>This is title</h3>
                        <div className="portfolio_item-cta">
                        <a href="" className="btn" target="_blank"> GitHub </a>
                        <a href="" className="btn btn-primary" target="_blank">Live Demo</a>
                        </div>
                    </article>
                    </div>       
                     </section>
                    )

}

export default Portfolio;