import React from 'react';
import './ProjectCard.css';
const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.img} alt="Project" />
      <div className="project-actions">
        <h2>{props.name}</h2>
        <a href={props.link} target='_blank' rel='noreferrer'>
          <button className="button">
            LIVE
          </button>
        </a>
      </div>
      <div className="desc">
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
