import React from "react";
import './projects.css';
import my_snap from '../../asset/my_snap.jpg';
import puissance4 from '../../asset/puissance4.png';
import my_twitter from '../../asset/my_twitter.png';
import plus from '../../asset/plus.png';

export default function Projects() {

    return (

        <div id="Projects">
            <p className="presentationComponent">Projects that i recently worked on</p>
            <h2 id="titleProject">Projects</h2>

            <div id="mainProject">

                <div className="projectContainer">
                    <img src={my_snap} className="imgProject" id="snap" alt="img of project"/>
                    <p className="projectName">My_SnapChat App made with React.js</p>
                    <a href="https://github.com/nadir42400/My_snapchat-" className="buttonOfProject">Github</a>
                </div>

                <div className="projectContainer" id="DivPuissance4">
                    <img src={puissance4} className="imgProject" id="puissance4" alt="img of project"/>
                    <p className="projectName">Puissance 4 Game in Jquery</p>
                    <a href="https://github.com/nadir42400/puissance-4" className="buttonOfProject">Github</a>
                </div>

                <div className="projectContainer">
                    <img src={my_twitter} className="imgProject" id="twitter" alt="img of project"/>
                    <p className="projectName">My_Twitter is a group project written PHP</p>
                    <a href="https://github.com/nadir42400/My_twitter" className="buttonOfProject">Github</a>
                </div>
            </div>

            <div id="secondLineContainer">

                <div className="projectContainer" id="plus">
                    <img src={plus} className="imgProject" id="imgPlus" alt="img of project"/>
                </div>
            </div>

        </div>
    );
};