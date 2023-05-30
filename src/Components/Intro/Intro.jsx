import React from 'react'
import './Intro.css';
import TextLoop from "react-text-loop";
import Lottie from '../../Lotties/lottie'
import Scrolldown from '../../Lotties/ScrollDown'
import { Icon } from '@iconify/react';
const Intro = () => {
    const scrollDown = () => {
        const scrollStep = window.innerHeight / 80;
        let scrollPosition = 0;
      
        const scrollToPosition = () => {
          if (scrollPosition < window.innerHeight) {
            scrollPosition += scrollStep;
            window.scrollTo(0, scrollPosition);
            window.requestAnimationFrame(scrollToPosition);
          }
        };
      
        window.requestAnimationFrame(scrollToPosition);
      };
      
      
    return (
        <>
            <div className="intro" id='Home'>
                <div className="ileft">
                    <span className='intro-bijay'>Hey! I am Bijay </span>
                    <p>I'm into <span> </span>
                        <TextLoop>
                            <span className='moving-text'> Full Stack Development</span>
                            <span className='moving-text'> Competitive Programming</span>
                            <span className='moving-text'> Tech Communities</span>

                        </TextLoop>
                    </p>
                    <span>
                        Coder by day, software engineer by night. Working with web development and competitive programming to bring out the best in technology. I am deep diving more into the field of software development and trying to be better with passing time
                    </span>
                </div>
                <div className="iright">
                    <a
                        href="https://www.linkedin.com/in/bijay-jiwrajka-6b308a225/"
                        target="_blank"
                        rel="noreferrer"
                    >

                        <Icon className='icon-social' icon="radix-icons:linkedin-logo" />
                        <p>
                            Linkedin
                        </p>
                    </a>
                    <a
                        href="https://github.com/bj-jiwrajka"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon className='icon-social' icon="radix-icons:github-logo" />
                        <p>Github</p>
                    </a>

                    <a
                        href="https://www.leetcode.com/bj-jiwrajka"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon className='icon-social' icon="cib:leetcode" />
                        <p>Leetcode</p>
                    </a>

                </div>
            </div>
            <Lottie />
            <div onClick={scrollDown}>
            <Scrolldown/>
            </div>
        </>


    )
}

export default Intro
