import React, { COM } from "react";
import "./style.css";
import logo from './reactlogo.png';


function Home(){
    return(
        <div>
            <h1 className="titleAH">Something about software where was page created</h1>
            <div className="polaroid">
                <img className="img" src={logo} alt="reactlogo"/>
                <div class="container2">
                <p> This simple web-site was created by ME(more in about) in software called react. 
                    React (also known as React.js or ReactJS) is a free and open-source 
                    front-end JavaScript library for building user interfaces based on UI components</p>
                </div>
            </div>

        </div>
    );
}

export default Home;