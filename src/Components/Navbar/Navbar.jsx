import React from 'react'
import './Navbar.css'
import toggle from '../../img/toggle-switch.png';
import togglemenu from '../../img/toggle.png';
function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="left">
          <span>Theme</span>
          <img src={toggle} alt="" />
        </div>
        <div className="right">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
                <div className="togglemenu"><img src={togglemenu}  alt="" /></div>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
