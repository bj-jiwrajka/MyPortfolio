import { useState } from 'react';
import './Services.css';

const skillsData = [
    {
        id: 1,
        name: 'Programming Languages',
        description:
            'I have a good command over various programming languages such as C, C++, JavaScript, Python ,R and Typescript. Though i know multiple programming languages, i am most comfortable with JavaScript and C++. I have practised Data Structures and ALgorithms in C and C++. I am presently learning Object Oriented Programming in C++',
    },
    {
        id: 2,
        name: 'Frameworks',
        description:
            'I have experience building responsive and user-friendly websites using HTML, CSS, and JavaScript. I also have experience with various front-end frameworks such as ReactJS, NextJS. I have also used CSS frameworks such as Bootstrap , TailwindCSS, etc. ',
    },
    {
        id: 3,
        name: 'Databases',
        description:
            'I have a good command over SQL and NoSQL databases. I have used SQL databases such as MySQL and PostgreSQL. I have also used NoSQL databases such as MongoDB and Prisma. I have also used Firebase for authentication and database purposes.',
    },
    {
        id: 4,
        name: 'Development Tools',
        description:
            'I have a good command over various development tools such as Git, Github, VS Code, etc. I have also used various cloud platforms such as Netlify, Git/Github , Vercel, etc. I am familiar with JS environment such as NodeJS, Express JS, etc.    ',
    },
    {
        id: 5,
        name: 'Data Structures & Algorithms',
        description:
            'I have a good command over various data structures and algorithms. I have practised Data Structures and Algorithms in C and C++.',
    },
    {
        id: 6,
        name: 'Other Skills',
        description:
            'Can speak 5 languages with a good command over them. Have a good command over English and Hindi. Can speak Bengali, Assamese, Marwadi and more. ',
    },
];

const Services = () => {
    const [selectedSkill, setSelectedSkill] = useState(null);

    const handleSkillClick = (id) => {
        setSelectedSkill(id);
    };

    return (
        <div className="skills" id='Services'>
            <div className='skills_left'>
                <span>Skills I'm </span>
                <div className='E'>

                    Expert at
                </div>

            </div>
            <div className="skills__cards">
                {skillsData.map((skill) => (
                    <div
                        key={skill.id}
                        className={`skills__card ${selectedSkill === skill.id ? 'selected' : ''
                            }`}
                        onClick={() => handleSkillClick(skill.id)}
                    >

                        <h3 className="skills__name">{skill.name}</h3>
                     
                    </div>
                ))}

                {selectedSkill && (
                    <div className="skills__details">
                        <h3 className="skills__name">
                            {skillsData[selectedSkill - 1].name}
                        </h3>
                        <p className="skills__description">
                            {skillsData[selectedSkill - 1].description}
                        </p>
                    </div>
                )}
            </div>


        </div>
    );
};

export default Services;
