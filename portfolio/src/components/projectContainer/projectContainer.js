import React from "react";

export default function ProjectContainer(props) {
    return (
        <div className="projectContainer">
            <img src={props.img} className="imgProject" alt="img of project" />
            <p className="projectName">{props.title}</p>
            <a href={props.link} className="buttonOfProject">
                Github
            </a>
        </div>
    );
}
