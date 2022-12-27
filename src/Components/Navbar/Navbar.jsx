import React from 'react'
import './Navbar.css'
import toggle from '../../img/togglelight.png';
import togglemenu from '../../img/toggle.png';
import { Link } from 'react-scroll';
function Navbar() {
  return (
    <div>
      <div className="navbar">
      <div className="left">
          <span>DARK</span>
          <img src={toggle} alt="" />
        </div>
       
        <div className="right" style={{sticky:true}} >
          <ul >
            <Link spy={true} to='Home' smooth={true} activeClass="activeClass"><li>Home</li></Link>
            <Link spy={true} to='About' smooth={true} ><li>About</li></Link>
            <Link spy={true} to='Skills' smooth={true} ><li>Skills</li></Link>
            <Link spy={true} to='Projects' smooth={true} ><li>Projects</li></Link>
            <Link spy={true} to='Contact' smooth={true} ><li>Contact</li></Link>
            <div className="togglemenu"><img src={togglemenu} alt="" /></div>
          </ul>
        </div>
       
      </div>
    </div>
  )
}

export default Navbar;
