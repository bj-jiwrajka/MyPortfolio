import React from 'react';
import SkillCard from '../Services/SkillCard';
import './Projects.css'
import Project1 from '../../img/Project1.png';
import Project2 from '../../img/Project2.png';
import Project3 from '../../img/Project3.png';
import Oikyotaan from '../../img/Oikyotaan.png'
import OnlineMeal from '../../img/OnlineMeal.png';
import ProjectCard from './ProjectCard';
import Portfolio from '../../img/Portfolio.png';
const Projects = () => {
    return (
        <div className='projects' id='Projects'>
            <div className='project-title'>
                Projects I've<span className='me'> Worked In</span>
            </div>
            <div className="project-content">

                <div className="backend-icons">
                    <div className="project-icons">
                        <SkillCard skill="NodeJS" icon="logos:nodejs" />
                        <SkillCard skill="Prisma" icon="logos:prisma" />
                        <SkillCard skill="TypeScript" icon="logos:typescript-icon" />
                        <SkillCard skill="SASS" icon="logos:sass" />
                        <SkillCard skill="ExpressJS" icon="skill-icons:expressjs-light" />
                        <SkillCard skill="ReactJS" icon="logos:react" />
                        <SkillCard skill="NextJS" icon="devicon:nextjs-wordmark" />
                        <SkillCard skill="MongoDB" icon="logos:mongodb-icon" />

                    </div>
                    <div className="backend-projects">
                        <ProjectCard name={"GRAFINY"} img={Project3} desc={"WIP"} />
                        <ProjectCard name={"CSS Website"} img={Project2} link={"https://nits-css.live"} desc={"It is the official website of Computer Science Society, NIT Silchar"} />
                    </div>
                </div>
                <div className="backend-icons">
                    <div className="project-icons">
                        <SkillCard skill="ReactJS" icon="logos:react" />
                        <SkillCard skill="SASS" icon="logos:sass" />
                        <SkillCard skill="CSS3" icon="logos:css-3" />
                        <SkillCard skill="JavaScript" icon="logos:javascript" />
                    </div>
                    <div className="backend-projects">
                        <ProjectCard name={"Oikyotaan Website"} img={Oikyotaan} desc={`It is the official website of Bengali new year fest of our college - "Oikyotaan"`} link={"https://oikyotaan2023.in/"} />
                        <ProjectCard name={"Personal Portfolio"} img={Portfolio} desc={"This is my personal portfolio showcasing my projects and skills."} link={"https://bjiwrajka.vercel.app"} />
                    </div>
                </div>
                <div className="backend-icons">
                    <div className="project-icons">
                        <SkillCard skill="HTML5" icon="logos:html-5" />
                        <SkillCard skill="CSS3" icon="logos:css-3" />
                        <SkillCard skill="JavaScript" icon="logos:javascript" />
                        <SkillCard skill="GitHub" icon="logos:github-icon" />

                    </div>
                    <div className="backend-projects">
                        <ProjectCard name={"My Weather Website"} img={Project1} desc={"An API based weather application"} link={"https://bj-jiwrajka.github.io/first_weather_website"} />
                        <ProjectCard name={"My Online Meal"} img={OnlineMeal} desc={"An online meal ordering website where users can order delicious meals"} link={"https://bj-jiwrajka.github.io/first_food_website/"}  />
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Projects;
