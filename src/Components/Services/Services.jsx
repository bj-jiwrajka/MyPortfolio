import { useState } from 'react';
import './Services.css';

const skillsData = [
    {
        id: 1,
        name: 'Programming Languages',
        description:
            'I have a good command over various programming languages such as C, C++, JavaScript, Python ,R and Typescript. Though i know multiple programming languages, i am most comfortable with JavaScript and C++. I have practised Data Structures and ALgorithms in C and C++. I am presently learning Object Oriented Programming in C++',
        // icon: 'fa-code',
    },
    {
        id: 2,
        name: 'Frameworks',
        description:
            'I have experience solving problems on various online judges such as Codeforces, Codechef, and Leetcode. I have also participated in various competitive programming contests.A pupil at Codeforces, with an impressive track record of competing and solving challenging problems.Three star rating at Codechef, demonstrating the aptitude for quickly and accurately coding solutions to complex problems.',
        // icon: 'fa-paint-brush',
    },
    {
        id: 3,
        name: 'Databases',
        description:
            'I have experience managing events such as hackathons, workshops, and conferences. I have also been a part of various student organizations.Streamlined events planning with a wealth of features to easily manage large-scale events. Comprehensive event scheduling, budgeting, and planning tools to make sure all details are taken care of. Keep track of every aspect of an event in one centralized place.',
        // icon: 'fa-pencil-alt',
    },
    {
        id: 4,
        name: 'Development Tools',
        description:
            'I have experience building responsive and user-friendly websites using HTML, CSS, and JavaScript. I also have experience with various front-end frameworks such as React. I know many programming languages such as C, C++, JavaScript, Python ,R, Typescript . I have a good command in Node.Js, mongoDB, Prisma and Passport JS',
        // icon: 'fa-pencil-alt',
    },
    {
        id: 5,
        name: 'Data Structures & Algorithms',
        description:
            'Proven problem-solving skills that have yielded significant results. Solved 100+ problems on leetcode. Showcased coding capabilities by participating in the DSA Marathon organised by the  CP Wing of Computer Science Society,NIT Silchar.',
        // icon: 'fa-pencil-alt',
    },
    {
        id: 6,
        name: 'Other Skills',
        description:
            'Can speak 5 languages with a good command over them. Have a good command over English and Hindi. Can speak Bengali, Assamese, Marwadi and more. ',
        // icon: 'fa-pencil-alt',
    },
];

const Services = () => {
    const [selectedSkill, setSelectedSkill] = useState(null);

    const handleSkillClick = (id) => {
        setSelectedSkill(id);
    };

    return (
        <div className="skills" id='Services'>
            {/* <h2>Skills &amp; Services</h2> */}
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

                        {/* <i className={`fas ${skill.icon} skills__icon`}></i> */}
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
