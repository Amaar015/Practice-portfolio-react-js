import React from "react";
import './footer.css'
function Footer(){
return (
        <footer>
                    <a href="#" className="footer_logo">Hussain</a>

                    <ul className="permalinks">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Experience</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Porfolio</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Contact</a></li>

                    </ul>

                    <div className="footer_socials">
                                        <a href="#">F</a>
                                        <a href="#">I</a>
                                        <a href="#">T</a>
                    </div>

                    <div className="footer_copyright">
                                        <small> &copy; HussainReal ! All right Reserved</small>
                    </div>
        </footer>

                      
                    )

}

export default Footer;