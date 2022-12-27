import React from 'react'
import './Services.css';
import Card from '../Card/Card';
import event from '../../img/event.jpeg';
import webdev from '../../img/webdev.jpeg';
import cp from '../../img/cp.jpeg';


const Services = () => {
    return (
        <div className="services" id='Skills'>
            <div className="sleft">
                <span>Skills I am</span> 
                <span>Expert at...</span>
                <span>I am a professional web developer and a part-time competitve programmer. I also love to organise events on various ocassions</span>

            </div>
            <div className="sright">
                <div>
                    <Card
                        emoji={webdev}
                        heading='Web Development'
                        desc=' I have strong grip on HTML,CSS & JS and have good knowledge and experience in React JS, Next JS Bootstrap and Tailwind CSS'
                    />
                </div>


                <div>
                    <Card
                        emoji={cp}
                        heading='Competitive Programming'
                        desc=' I have participated in numerous coding contests at various coding platforms like Codechef, Codeforces and Newton School. '
                    />
                </div>
                <div>
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
