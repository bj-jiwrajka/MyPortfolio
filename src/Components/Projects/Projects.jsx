import React from 'react';
import { useSpring, animated } from 'react-spring';
import ProjectCard from './ProjectCard';
import './Projects.css';
function Projects() {
    const projects = [
        {
            id: 1,
            imgSrc: '../../assets/Project1.png',
            imgAlt: 'MyWeatherWebsite',
            title: 'MyWeatherWebsite',
            description: 'An API based simple weather website ',
            link: 'https://bj-jiwrajka.github.io/first_weather_website/'
        },
        {
            id: 2,
            imgSrc: '../../assets/Project2.png',
            imgAlt: 'CSSWebsite',
            title: 'CSSWebsite',
            description: 'Official website of Computer Science Society',
            link: 'https://nitscss.live'
        },
        {
            id: 3,
            imgSrc: '../../assets/Project3.png',
            imgAlt: 'Grafiny',
            title: 'Grafiny',
            description: 'A website by the GDSC members for the students',
            link: 'https://deploy-preview-30--grafiny-nits.netlify.app/'
        }
    ];

    const animations = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 500,
        config: { duration: 1000 }
    });

    return (
        <div>



            <div className="ileft" id='Projects'>

                <span>Projects I've</span>
                <span>worked in..</span>
            </div>
            <animated.div style={animations} className="projects">
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
            </animated.div>
        </div>
    );
}
export default Projects;

