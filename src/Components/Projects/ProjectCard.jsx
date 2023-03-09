import React from 'react';

function ProjectCard(props) {
  return (
    <div className="project-card">
      <img src={props.imgSrc} alt={props.imgAlt} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <a href={props.link} target="_blank" rel="noreferrer">View Project</a>
    </div>
  );
}

export default ProjectCard;
