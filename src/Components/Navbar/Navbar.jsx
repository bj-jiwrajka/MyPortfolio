import React from 'react'
import './Navbar.css'
// import toggle from '../../img/togglelight.png';
import togglemenu from '../../img/toggle.png';
import { Link } from 'react-scroll';
import { useState } from 'react';
import bjlogo from '../../img/bjlogo.jpg';

function Navbar() {
  const[active,setActive]=useState("nav_menu");
  const toggleNav=()=>{
  active==="nav_menu" ? setActive("nav_menu nav_active"): setActive("nav_menu"); 
  }
  // const [theme, setTheme] = useState('light');

  // const toggleTheme = () => {
  //   setTheme(theme === 'light' ? 'dark' : 'light');
  // };
  // console.log(theme);
  return (

    <div>
      <div className="navbar">
        <div className="left">
          <img src={bjlogo} alt="" />
        </div>

        <div className="right" style={{ sticky: true }} >
          <ul className={active}>
            <Link spy={true} to='Home' smooth={true} activeClass="activeClass"><li>Home</li></Link>
            <Link spy={true} to='About' smooth={true} ><li>About</li></Link>
            <Link spy={true} to='Services' smooth={true} ><li>Skills</li></Link>
            <Link spy={true} to='Projects' smooth={true} ><li>Projects</li></Link>
            <Link spy={true} to='Contact' smooth={true} ><li>Contact</li></Link>
            {/* <div className="togglemenu" onClick={toggleNav}><img src={togglemenu} alt="" /></div> */}
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Navbar;
