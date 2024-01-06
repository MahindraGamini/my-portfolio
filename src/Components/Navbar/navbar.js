import React from "react";
import './navbar.css';

import contact from '../../Assests/contact.png'
import letter from './../../Assests/medium-m.svg';

import {Link} from 'react-scroll'
const Navbar = () => {
    return (
        <nav className="navbar">
           <Link className="desktopitem" activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500}> <img className="logo" src={letter} alt="logo" /> </Link>
            <div className="desktop-menu">
                <Link className="desktopitem" activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
                <Link className="desktopitem" activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} > About</Link>
                <Link className="desktopitem" activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500}>Projects</Link>
                
            </div>
            <button className="dsktpbtn"  onClick={()=>{
                    document.getElementById('contactPage').scrollIntoView({behavior: 'smooth'});
                    }}>
                <img src={contact} alt="contacticon"  className="contact" />
                Contact me
            </button>
        </nav>
    );
}

export default Navbar;
