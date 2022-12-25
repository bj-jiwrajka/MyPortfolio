import React from 'react'
import './Intro.css';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
// import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
// import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
const Intro = () => {
    return (
        <div className="intro">
            <div className="ileft">
                <span>Hey! I am </span>
                <span>Bijay</span>
                <span>I am an enthusiastic web developer and a skillchy competitive programmer. I am learning more into the field of software development and trying to be better with passing time</span>
                <a href="https://github.io/bj-jiwrajka/my_portfolio_website/">
                    <button className='button ibtn'>Hire Me</button> </a>
            </div>

 <div className="iright">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
            </div>
        </div>
    )
}

export default Intro
