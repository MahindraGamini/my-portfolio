import React from "react";
import './intro.css';
import bg from './../Assests/mahi.png' ;
import job from './../Assests/1608586_briefcase_icon.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello </span>
                <span className="introtext"> I'm   <span className="name" >Mahindra</span><br></br>Web Developer</span>
                <p className="desc">I am a skilled WebDeveloper with experience in creating <br></br>visually appealing web designs</p>
                <Link to="yourTargetElementId" smooth={true} duration={500}><button className="btn"><img className="btnimg" src={job} alt="" />Hire me</button></Link>
            </div>
            <img className="background" src={bg} alt="hire me" />
        </section>
    );
}

export default Intro;
