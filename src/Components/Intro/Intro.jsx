import React from 'react'
import './Intro.css';
import TextLoop from "react-text-loop";
import Lottie from "../../lottie";
const Intro = () => {
    return (
        <>
            <div className="intro" id='Home'>
                <div className="ileft">
                    <span className='intro-bijay'>Hey! I am Bijay </span>
                    <p>I'm into <span> </span>
                        <TextLoop>
                            <span className='moving-text'> Full Stack Development</span>
                            <span className='moving-text'> Competitive Programming</span>
                        </TextLoop>
                    </p>
                    <span>
                        Coder by day, software engineer by night. Working with web development and competitive programming to bring out the best in technology. I am deep diving more into the field of software development and trying to be better with passing time
                    </span>
                </div>
                <div className='buttons'>
                    <a href="https://bit.ly/bj-jiwrajka" target="_blank" rel="noreferrer">
                        <button className='button sbtn'>My Resume</button>
                    </a>
                    <a href="https://github.com/bj-jiwrajka/" >
                        <button className='button sbtn'>My Github</button>
                    </a>
                </div>

            </div>
            <Lottie />
        </>


    )
}

export default Intro
