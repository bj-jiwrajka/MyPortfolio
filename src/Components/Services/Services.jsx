import React from 'react'
import './Services.css';
import Card from '../Card/Card';
import event from '../../img/event.jpeg';
import webdev from '../../img/webdev.jpeg';
import cp from '../../img/cp.jpeg';


const Services = () => {
    return (
        <div className="services">
            <div className="sleft">
                <span>Skills I am</span>
                <span>Expert at...</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nam voluptatem assumenda beatae fuga aperiam at tempore quia exercitationem sit.</span>
<a href="https://docs.google.com/document/d/1o3hfnMmN0qJ18wD2RKtJwRx3bJRRNOOhBpj2drMKpsg/edit?usp=sharing">                <button className='button sbtn'>My Resume</button>
</a>
            </div>
            <div className="sright">
                <div style={{ top: "2rem", left: "-4rem" }}>
                    <Card
                        emoji={webdev}
                        heading='Web Development'
                        desc=' I have strong grip on HTML,CSS & JS and have good knowledge and experience in React JS, Next JS Bootstrap and Tailwind CSS'
                    />
                </div>


                <div style={{ top: "2rem", left: "4rem" }}>
                    <Card
                        emoji={cp}
                        heading='Competitive Programming'
                        desc=' I have participated in numerous coding contests at various coding platforms like Codechef, Codeforces and Newton School. '
                    />
                </div>
                <div style={{ top: "2rem", left: "-4rem" }}>
                    <Card
                        emoji={event}
                        heading='Event Management'
                        desc=' I have a good experience in managing events such as NITS Hacks 5.0. Also I have been the managing head at GDSC Orientation 2023 '
                    />
                </div>

            </div >
        </div >
    )
}

export default Services
