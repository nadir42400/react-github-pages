import React from "react";
import pictureOfMe from '../../asset/pictureOfMe.jpg';
import linkedinLogo from '../../asset/logo-linkedin.png';
import githubLogo from '../../asset/signe-github.png';
import CV from '../../asset/cvDevWeb.pdf';
import './head.css';

export default function Head () {

    return (
        <div id="Head">
            <div id="sideBare">
                <a href='https://www.linkedin.com/in/nadir-bensadi-847aab226/'>
                    <img alt="logoLinkedin" src={linkedinLogo} className="logoSideBare"/>
                </a>
                <a href='https://github.com/nadir42400'>
                    <img alt="logoGithub" src={githubLogo} className="logoSideBare"/>
                </a>
            </div>

            <div id="mainHead">
                <p className="TxtMain"><strong>hello, i'm</strong></p>
                <h1 className="TxtMain">Nadir Bensadi</h1>
                <p className="TxtMain">fullstack developer</p>
        
                <div id="divButton">
                    <a href={CV} download='Nadir_CV_Fullstack' id="DL" className="ButtonMain">Download CV</a>
                    {/* faire le link vers le component contact */}
                    <a  href="#Contact" id='Talk' className="ButtonMain">Let's talk</a>
                </div>
        
                <img src={pictureOfMe} alt="me" id="Picture"/>
            </div>
        </div>
    );
};