import React from "react";
import './work.css';
const work = ()=>{
    return(
        
            <span id="works">
                <h2 className="workstitle">My Projects</h2>
                <span className="workdesc">Leveraged JavaScript and React proficiency to craft a dynamic React-based project, merging front-end web design expertise. Implemented creative and user-centric design principles, enhancing visual appeal and user experience, reflecting a dual passion for development and design</span>
                <div className="worksimgs">
                    <div className="projects" >
                        <div className="projecttitle">Rock Paper Scissor Game</div>
                        <div className="projectdesc">A Fully functional and Reactive Game of Rock Paper Scissors game using basics of web development (HTML,CSS and JS)<br></br> <a href="https://rock-paper-scissors-gaming.glitch.me/">Click here to play</a></div>
                    </div>
                    <div className="projects" >
                        <div className="projecttitle">Spotify Clone</div>
                        <div className="projectdesc">A Fully functional and Reactive  Spotify Clone where you can listen to songs.The functionality will be upto the mark of Spotify<br></br><a href="https://spotify-clone-mahi.glitch.me/spot.html">Click here to listen music</a></div>
                    </div>
                </div>
            </span>
       
    )
}
export default work;