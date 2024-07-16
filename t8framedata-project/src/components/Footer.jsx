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
                    <p>Tekkensource is an unofficial webapp covering character frame data and game strategy for TEKKEN® 8. This site is not conected with, sponsored, affiliated with or endorsed by Bandai Namco Holdings Inc. or any of its subsidiaries.</p>
                </div>
            </div>
        </footer>
      );
}

export default Footer;