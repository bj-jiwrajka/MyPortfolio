import React from 'react';
import './Services.css';
import SkillCard from './SkillCard';

const Services = () => {
  return (
    <div className="skills" id='Services'>
      <div className='sleft'>
        Expertise &
        <span className='E'> Aptitudes</span>
      </div>
      <div className='sright'>
        <div className="skills_cards">
          <SkillCard skill="HTML5" icon="logos:html-5" />
          <SkillCard skill="CSS3" icon="logos:css-3" />
          <SkillCard skill="JavaScript" icon="logos:javascript"/>
          <SkillCard skill="TypeScript" icon="logos:typescript-icon"/>
          <SkillCard skill="MongoDB" icon="logos:mongodb-icon" />
          <SkillCard skill="ExpressJS" icon="skill-icons:expressjs-light" />
          <SkillCard skill="ReactJS" icon="logos:react"/>
          <SkillCard skill="NodeJS"  icon="logos:nodejs"/>
          <SkillCard skill="Prisma" icon="logos:prisma" />
          <SkillCard skill="NextJS" icon="devicon:nextjs-wordmark" />
          <SkillCard skill="SASS" icon="logos:sass" />
          <SkillCard skill="Git" icon="devicon:git" />
          <SkillCard skill="GitHub"  icon="logos:github-icon"/>
          <SkillCard skill="Vercel" icon="logos:vercel-icon"/>
          <SkillCard skill="C/C++" icon="logos:c"/>
        </div>
      </div>
    </div>
  );
};

export default Services;
