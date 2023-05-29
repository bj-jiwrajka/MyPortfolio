import React from 'react';
import { useSpring, animated } from 'react-spring';
import ProjectCard from './ProjectCard';
import './Projects.css';
function Projects() {
    const projects = [
        {
            id: 1,
            imgSrc: '/assets/Oikyotaan.png',
            imgAlt: 'Oikyotaan Website',
            title: 'Oikyotaan Website',
            description: 'Official website of Oikyotaan 2023 - Bengali New Year',
            link: 'https://oikyotaan2023.in'
        },
        {
            id: 3,
            imgSrc: '/assets/Project3.png',
            imgAlt: 'Grafiny',
            title: 'Grafiny',
            description: 'A website by the GDSC members for the students',
            link: 'https://deploy-preview-30--grafiny-nits.netlify.app/'
        },
        {
            id: 2,
            imgSrc: '/assets/Project2.png',
            imgAlt: 'CSSWebsite',
            title: 'CSSWebsite',
            description: 'Official website of Computer Science Society,, NIT Silchar ',
            link: 'https://nitscss.live'
        },

    ];

    const animations = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 500,
        config: { duration: 1000 }
    });

    return (
        <div className="projects" id='Projects'>
            <div className="pleft">
                Projects I've<span> worked in..</span>
            </div>

            <div className="pright">
                {projects.map(project => (
                    <ProjectCard
                        key={project.id}
                        imgSrc={project.imgSrc}
                        imgAlt={project.imgAlt}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                    />
                ))}
            </div>

        </div>

    );
}
export default Projects;

