import React from 'react'
import './Intro.css';
import Lottie from "../../lottie";
const Intro = () => {
    return (
        <div className="intro" id='Home'>

            <div className="ileft">
                <span>Hey! I am </span>
                <span>Bijay</span>
                <span>Sophomore at NIT Silchar.
                    Coder by day, software engineer by night. Working with web development and competitive programming to bring out the best in technology. I am deep diving more into the field of software development and trying to be better with passing time</span>
                <div className='buttons'>
                <span>
                    <a href="https://drive.google.com/file/d/1uF14ubKfQqlUgUx45mtoxLeEXhon3VvE/view?usp=share_link" target="_blank" rel="noreferrer">                <button className='button sbtn'>My Resume</button>
                    </a>
                        
                    </span>
                    <span>


                    <a href="https://github.com/bj-jiwrajka/" >
                        <button className='button sbtn'>My Github</button>
                    </a>
                </span>
                </div>

            </div>
            <Lottie />

            {/* <div className="iright">
                <Lottie />
            </div> */}
        </div>
    )
}

export default Intro
