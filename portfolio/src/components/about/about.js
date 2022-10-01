import React from "react";
import pictureOfMe from "../../asset/pictureOfMe.jpg";
import Hat from "../../asset/graduate-cap.png";
import translate from "../../asset/language.png";
import puzzle from "../../asset/puzzle.png";
import "./about.css";

export default function About() {
    return (
        <div id="About">
            <h2 id="h2About">About Me</h2>

            <div id="mainAbout">
                <img src={pictureOfMe} alt="me" id="ImgMe" />

                <div id="contente">
                    <div id="divArticle">
                        <article>
                            <img
                                src={Hat}
                                alt="congrat hat"
                                className="IconArticle"
                            />
                            <h4 className="TXTarticle">FORMATION</h4>
                            <p className="TXTarticle">Web@cademie EPITECH</p>
                        </article>

                        <article>
                            <img
                                src={translate}
                                alt="translate"
                                className="IconArticle"
                            />
                            <h4 className="TXTarticle">LANGUAGE</h4>
                            <p className="TXTarticle" id="ArticleLanguage">
                                Native speaker of French and good in english
                            </p>
                        </article>

                        <article>
                            <img src={puzzle} alt="" className="IconArticle" />
                            <h4 className="TXTarticle">HOBBY</h4>
                            <p className="TXTarticle" id="ArticleHobby">
                                Video Game, Sport, skating...
                            </p>
                        </article>
                    </div>
                    <p id="TXTmain">
                        I am currently looking for an apprenticeship as a
                        fullstack developer. I find the web very interesting,
                        full of surprises and challenges. In the future, I want
                        to continue in cybersecurity although I am interested in
                        computing in its entirety and I intend to test other
                        areas in the future (robotics, AI, software development,
                        ...).
                    </p>
                </div>
            </div>
        </div>
    );
}
