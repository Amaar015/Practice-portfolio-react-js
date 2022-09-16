import React from "react";
import './header.css';
import CTA from "./CTA";
import Social from "./Social";
import Me from "../../images/pic1.png";
function Header(){
return (
<header>
                    <div className="container container_header">
                                        <h5>Hello I'm</h5>
                                        <h1>Amaar Raza</h1>
                                        <h5 className="text-light">Fullstack Developer</h5>
                                         <CTA />
                                         <Social/>
                                         <div className="me">
                                                            <img src={Me} alt="Me" />

                                         </div>
                                        <a href="#contact" className="Scroll_down">Scroll Down</a>
                    </div>
 
</header>
)

}

export default Header;