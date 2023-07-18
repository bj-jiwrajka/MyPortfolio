import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-scroll';
import './Footer.css';

function Footer({ darkmode }) {
    return (

        <footer className="footer">
            <div className={`${darkmode ? 'about-line' : ''}`}>
            </div>

            <div className="footer-container">

                <div className="fleft1">
                    <ul>

                        <li>
                            <a href="https://leetcode.com/bj-jiwrajka/">Leetcode</a>

                        </li>
                        <li>
                            <a href="https://www.codechef.com/users/bj_0304">Codechef</a>


                        </li>
                        <li>
                            <a href="https://www.github.com/bj-jiwrajka">Github</a>


                        </li>
                        <li>
                            <a href="https://codeforces.com/profile/bj_jiwrajka">Codeforces</a>

                        </li>
                    </ul>
                </div>

                <div className="fleft3">


                    <ul>
                        <Link spy={true} to='About' smooth={true} ><li>About</li></Link>
                        <Link spy={true} to='Services' smooth={true} ><li>Skills</li></Link>
                        <Link spy={true} to='Projects' smooth={true} ><li>Projects</li></Link>
                        <Link spy={true} to='Contact' smooth={true} ><li>Contact</li></Link>
                    </ul>
                </div>

                <div className="fright2">
                    <a
                        href="https://www.linkedin.com/in/bijay-jiwrajka-6b308a225/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon icon="radix-icons:linkedin-logo" />
                    </a>
                    <a
                        href="https://www.facebook.com/bijay.jiwrajka.1"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon icon="mingcute:facebook-fill" />
                    </a>
                    <a
                        href="mailto:jiwrajkabijay@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon icon="ic:twotone-email" />
                    </a>
                    <a
                        href="https://www.instagram.com/bj_jiwrajka/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon icon="uil:instagram-alt" />
                    </a>
                    <a
                        href="https://twitter.com/bj_jiwrajka"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon icon="uim:twitter" />
                    </a>

                </div>

            </div>


            <p className="footer__text">
                © 2023 Bijay Jiwrajka. All rights reserved.
            </p>


        </footer>
    );
}

export default Footer;
