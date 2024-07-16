import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaGithub } from 'react-icons/fa';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom'

function Footer (){
    return (      
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <ul className="links">
                        <li><NavLink to={`/features`} className=''>Features</NavLink></li>
                        <li><NavLink to={`/credits`}>Credits</NavLink></li>
                        <li>
                            <a href="https://github.com/cifredo-sebastian/TekkenSource">
                                <FaGithub/> Github
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    <p>Tekkensource is not connected with, sponsored, or endorsed by Namco Bandai or any of its affiliated companies.</p>
                </div>
            </div>
        </footer>
      );
}

export default Footer;