import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import { Icon } from '@iconify/react';
import bjlogo from '../../img/bjlogo.jpg';

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div>
      <div className="navbar">
        <div className="left">
          <img src={bjlogo} alt="" />
        </div>

        <div
          className={showLinks ? 'mobile-navbar right' : 'right'}
          style={{ sticky: true }}
        >
          <ul>
            <Link spy={true} to="Home" smooth={true} activeClass="activeClass">
              <li>Home</li>
            </Link>
            <Link spy={true} to="About" smooth={true}>
              <li>About</li>
            </Link>
            <Link spy={true} to="Services" smooth={true}>
              <li>Skills</li>
            </Link>
            <Link spy={true} to="Projects" smooth={true}>
              <li>Projects</li>
            </Link>
            <Link spy={true} to="Contact" smooth={true}>
              <li>Contact</li>
            </Link>
          </ul>
          <div className={showLinks ? 'hamburger-menu-2' : 'hamburger-menu'}>
            <Icon icon ="game-icons:hamburger-menu"  onClick={() => setShowLinks(!showLinks)}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
