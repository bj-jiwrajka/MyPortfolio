import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import { Icon } from '@iconify/react';

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const [activeSection, setactiveSection] = useState(' ');
  return (
    <div>
      <div className="navbar">
        <Link to="Home">

          <div className="left">
            <Icon icon="mingcute:at-fill" className='iconat' />
            <h5>BJ_JIWRAJKA</h5>
          </div>
        </Link>

        <div
          className={showLinks ? 'mobile-navbar right' : 'right'}
          style={{ sticky: true }}
        >
          <ul>
            <Link spy={true} to="Home" smooth={true} activeClass="activeClass" onClick={
              () => setShowLinks(!showLinks)
            } onSetActive={() => setactiveSection('Home')}>
              <li className={activeSection === 'Home' ? 'active' : ''}>Home</li>
            </Link>
            <Link spy={true} to="About" smooth={true} onClick={
              () => setShowLinks(!showLinks)} onSetActive={
              () => setactiveSection('About')
            }>
              <li className={activeSection === 'About' ? 'active' : ''}>About</li>
            </Link>
            <Link spy={true} to="Services" smooth={true}  onClick={
              () => setShowLinks(!showLinks)}  onSetActive={
              () => setactiveSection('Services')}>
              <li className={activeSection === 'Services' ? 'active' : ''}>Skills</li>
            </Link>
            <Link spy={true} to="Education" smooth={true}  onClick={
              () => setShowLinks(!showLinks)}  onSetActive={
              () => setactiveSection('Education')}>
              <li className={activeSection === 'Education' ? 'active' : ''}>Education</li>
            </Link>
            <Link spy={true} to="Projects" smooth={true}  onClick={
              () => setShowLinks(!showLinks)}  onSetActive={
              () => setactiveSection('Projects')}>
              <li className={activeSection === 'Projects' ? 'active' : ''}>Projects</li>
            </Link>
            <Link spy={true} to="Contact" smooth={true}  onClick={
              () => setShowLinks(!showLinks)}  onSetActive={
              () => setactiveSection('Contact')}>
              <li className={activeSection === 'Contact' ? 'active' : ''}>Contact</li>
            </Link>
          </ul>
          <div className={showLinks ? 'hamburger-menu-2' : 'hamburger-menu'}>
            <Icon icon="game-icons:hamburger-menu" onClick={() => setShowLinks(!showLinks)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
