import React, { COM } from "react";
import "./style.css";
import logo from './JustME.png';


function About() {
    return (
        <div>
            <h1 className="titleAH">Something about ME</h1>
            <div className="polaroid">
                <img className="img" src={logo} alt="JustME"/>
                <div class="container2">
                        <p>i want to introduce myself as a young amateur IT who
                            have studying in FEI STU bratislava for 3years now.
                            i want to find a job in cool team where i can improve
                            my skills and knowledge about IT. I am finding myself in
                            which direction i will go but i have some experiences from 
                            school and i think frontend is for me the best. I like UML
                            diagrams, creating websites, finding bugs and delete it and
                            a lot of thing which i like to get know more.                       </p>
                </div>
            </div>

        </div>
    );
}

export default About;