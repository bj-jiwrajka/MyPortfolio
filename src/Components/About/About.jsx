import React from 'react'
import './About.css'
import Bijay from '../../img/Bijay.jpg'
const About = () => {
  return (
<div className='about' id='About'> 
   
    <div className="aright">
    <span>Know more... </span>
                <span>About Me</span>
                <span>A passionate and hard working software developer and a competitive programmer!
                  <br></br>
                  <br></br>
                  I am currently in my 2nd year of B.Tech in CSE at National Institute of Technology, Silchar. I have been a part of global community such as Google Developer Students' Club,NITS and other societies such as Computer Science Society,NITS since the start of my academic year. I have been a part of several small and big projects organised under the clubs and societies.
                  <br>
                  </br>
                  <br>
                  </br>
                  I have also been practising Competitive Programming at various coding platforms such as Codeforces, Codechef, Leetcode since the beginning of my 3rd semester.I have solved nearly 250+ problems combined at all the platforms.
                </span>
    </div>
    <div className="aleft">
<img src={Bijay} alt="" />
    </div>
</div>
  )
}

export default About
