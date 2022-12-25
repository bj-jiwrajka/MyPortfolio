import React from 'react'
import './About.css'
import girl from '../../img/profile2.jpg'
const About = () => {
  return (
<div className='about'> 
    <div className="aleft">
<img src={girl} alt="" />
    </div>
    <div className="aright">
    <span>Know more... </span>
                <span>About Me</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit accusantium quam sed quo veritatis libero numquam debitis, suscipit commodi sit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi necessitatibus minima voluptatum alias. Tempora necessitatibus totam obcaecati nesciunt accusantium, maiores pariatur odit dicta velit consectetur cupiditate ipsum quidem iusto animi voluptas recusandae! Eligendi, et!</span>
    </div>
</div>
  )
}

export default About
