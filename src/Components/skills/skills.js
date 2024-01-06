import React from "react";
import "./skill.css";
import uiImage from "./../../Assests/ui.png";
import frontendImage from './../../Assests/front-end.png';
import appdesign from './../../Assests/mobile-app-design.png';
const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What do I do</span>
            <br />
            <span className="skillDes">I am a student with a solid foundation in JavaScript, Front-end Web Design (HTML, CSS), and hands-on experience in React. I am enthusiastic about creating innovative solutions and contributing to the world of technology.</span>
<div className="skillbars">
            <div className="skillbar">
                <img src={uiImage} alt="UI/UX Design" className="skillbarimg"></img>
                <div className="skillText">
                    <h3>UI/UX Designer</h3>
                    <p>Good experience in UI/UX design</p>
                </div>
            </div>

            <div className="skillbar">
                <img src={frontendImage} alt="Front-end Development" className="skillbarimg"></img>
                <div className="skillText">
                    <h3>Front-end Developer</h3>
                    <p>Experience in front-end web development</p>
                </div>
            </div>
            <div className="skillbar">
                <img src={appdesign} alt="Front-end Development" className="skillbarimg"></img>
                <div className="skillText">
                    <h3>App Designer</h3>
                    <p>Experience in App designing with Figma</p>
                </div>
            </div>
          </div>
        </section>
    );
};

export default Skills;
