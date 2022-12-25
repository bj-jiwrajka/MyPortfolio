import React from 'react'
import './Contact.css';
import Twitter from '../../img/icons8-twitter-48.png';
import Linkedin from '../../img/icons8-linkedin-48.png';
import Instagram from '../../img/icons8-instagram-48.png';
import Facebook from '../../img/icons8-facebook-48.png';
import Gmail from '../../img/icons8-gmail-logo.gif';
const Contact = () => {
  return (
    <div className="contact">
      <div className="cleft">
        <span>Contact me</span>
        <span>here...</span>
        <span>Main road, Mankachar | +91 8724989869</span>
      </div>
      <div className="cright">
        <div className="iicons">
          <a href="https://www.linkedin.com/in/bijay-jiwrajka-6b308a225/" > <img src={Linkedin} alt="" /></a>
          <a href="https://github.com/bj-jiwrajka" > <img src={Facebook} alt="" /></a>
          <a href="https://github.com/bj-jiwrajka" > <img src={Gmail} alt="" /></a>
          <a href="https://www.instagram.com/bj_jiwrajka/" > <img src={Instagram} alt="" /></a>
          <a href="https://twitter.com/bj_jiwrajka" > <img src={Twitter} alt="" /></a>

        </div>
      </div>
    </div>
  )
}

export default Contact
