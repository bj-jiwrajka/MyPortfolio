import React from 'react'
import './Contact.css';
import Twitter from '../../img/icons8-twitter-48.png';
import Linkedin from '../../img/icons8-linkedin-48.png';
import Instagram from '../../img/icons8-instagram-48.png';
import Facebook from '../../img/icons8-facebook-48.png';
import Gmail from '../../img/icons8-gmail-logo.gif';
const Contact = () => {
  return (
    <div className="contact" id='Contact'>
      <br></br>
      <br />
      <div className="cleft">
        <span>You can reach</span>
        <span>me at...</span>
        <span>Main road, Mankachar | +91 8724989869</span>
      </div>
      <div className="cright">
        <div className="iicons">
          <a href="https://www.linkedin.com/in/bijay-jiwrajka-6b308a225/" target="_blank"  rel="noreferrer"> <img src={Linkedin} alt="" /></a>
          <a href="https://github.com/bj-jiwrajka" target="_blank"  rel="noreferrer"> <img src={Facebook} alt="" /></a>
          <a href="mailto:jiwrajkabijay@gmail.com" target="_blank"  rel="noreferrer" > <img src={Gmail} alt="" /></a>
          <a href="https://www.instagram.com/bj_jiwrajka/" target="_blank"  rel="noreferrer"> <img src={Instagram} alt="" /></a>
          <a href="https://twitter.com/bj_jiwrajka" target="_blank"  rel="noreferrer"> <img src={Twitter} alt="" /></a>

        </div>
      </div>
    </div>
  )
}

export default Contact
