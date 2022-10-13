import React from "react";
import "./projects.css";
import my_snap from "../../asset/my_snap.jpg";
import puissance4 from "../../asset/puissance4.png";
import my_twitter from "../../asset/my_twitter.png";
import ProjectContainer from "../projectContainer/projectContainer";

export default function Projects() {
    return (
        <div id="Projects">
            <p className="presentationComponent">
                Projects that i recently worked on
            </p>
            <h2 id="titleProject">Projects</h2>

            <div id="mainProject">
                <ProjectContainer
                    img={my_snap}
                    title="My_SnapChat App made with React Native"
                    link="https://github.com/nadir42400/My_snapchat-"
                />
                <ProjectContainer
                    img={puissance4}
                    title="Puissance 4 Game in Jquery"
                    link="https://github.com/nadir42400/puissance-4"
                />
                <ProjectContainer
                    img={my_twitter}
                    title="My_Twitter is a group project written PHP"
                    link="https://github.com/nadir42400/My_twitter"
                />
            </div>
        </div>
    );
}
