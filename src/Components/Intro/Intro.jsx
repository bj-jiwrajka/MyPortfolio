import React from 'react'
import './Intro.css';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png'
import Lottie from "../../lottie";
const Intro = () => {
    return (
        <div className="intro" id='Home'>
            <div className="ileft">
                <span>Hey! I am </span>
                <span>Bijay</span>
                <span>I am an enthusiastic cum energetic web developer and a competitive programmer. I am deep diving more into the field of software development and trying to be better with passing time</span>
                <a href="https://docs.google.com/document/d/1o3hfnMmN0qJ18wD2RKtJwRx3bJRRNOOhBpj2drMKpsg/edit?usp=sharing">                <button className='button sbtn'>My Resume</button>
                </a>
            </div>

            <div className="iright">
<Lottie/>
            </div>
        </div>
    )
}

export default Intro
