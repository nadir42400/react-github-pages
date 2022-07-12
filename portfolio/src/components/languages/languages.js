import React from "react";
import './languages.css';
import check from '../../asset/checked.png';

export default function Langages () {

    return (
        <div id="Langages">
            <p className="presentationComponent">What Languages I mastery</p>
            <h2 id="H2langages">Development Languages</h2>
            <div id="LangagesMain">

                <div id="FrontendDev">

                    <h3 className="H3title">Frontend Development</h3>
                    <div id="divFront">

                        <div className="div3">

                            <div className="divLangages">
                                <div className="divLogoLan">
                                    <img alt="checkLogo" src={check} className="checkLogo"/>
                                    <h3>HTML</h3>
                                </div>
                                <p className='mastery'>mastered</p>
                            </div>

                            <div className="divLangages">
                                <div className="divLogoLan">
                                    <img alt="checkLogo" src={check} className="checkLogo"/>
                                    <h3>JavaScript</h3>
                                </div>
                                <p className='mastery'>intermediate</p>
                            </div>

                            <div className="divLangages">
                                <div className="divLogoLan">
                                    <img alt="checkLogo" src={check} className="checkLogo"/>
                                    <h3>(S)CSS</h3>
                                </div>
                                <p className='mastery'>mastered</p>
                            </div>
                        </div>

                        <div className="div1">

                            <div className="divLangages">
                                <div className="divLogoLan">
                                    <img alt="checkLogo" src={check} className="checkLogo"/>
                                    <h3>React</h3>
                                </div>
                                <p className='mastery'>intermediate</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="BackendDev">
                    <h3 className="H3title">Backend Development</h3>
                    <div id="divBack">

                        <div className="div3">

                            <div className="divLangages">
                                <div className="divLogoLan">
                                    <img alt="checkLogo" src={check} className="checkLogo"/>
                                    <h3>PHP</h3>
                                </div>
                                <p className='mastery'>intermediate</p>
                            </div>

                            <div className="divLangages">
                                <div className="divLogoLan">
                                    <img alt="checkLogo" src={check} className="checkLogo"/>
                                    <h3>SQL</h3>
                                </div>
                                <p className='mastery'>mastered</p>
                            </div>

                            <div className="divLangages">

                                <div className="divLogoLan">
                                    <img alt="checkLogo" src={check} className="checkLogo"/>
                                    <h3>Node</h3>
                                </div>
                                <p className='mastery'>basic</p>
                            </div>

                        </div>

                        <div className="div1">

                            <div className="divLangages">

                                <div className="divLogoLan">
                                    <img alt="checkLogo" src={check} className="checkLogo"/>
                                    <h3>Express</h3>
                                </div>
                                <p className='mastery'>basic</p>
                            </div>

                            <div className="divLangages">
                                <div className="divLogoLan">
                                    <img alt="checkLogo" src={check} className="checkLogo"/>
                                    <h3>Mongo</h3>
                                </div>
                                <p className='mastery'>basic</p>
                            </div>

                            <div className="divLangages">
                                <div className="divLogoLan">
                                    <img alt="checkLogo" src={check} className="checkLogo"/>
                                    <h3>Python</h3>
                                </div>
                                <p className='mastery'>basic</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};