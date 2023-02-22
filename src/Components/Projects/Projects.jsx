import React from 'react'
import './Projects.css'
import todo from '../../img/todolist.jpg';
import weather from '../../img/myweatherweb.png';
import food from '../../img/myonlinemeal.jpg';
import Card from '../Card/Card';
const Projects = () => {
    return (
        <div className="projects" id='Projects'>
             <br>
                </br>
                <br>
                </br>
            <div className="sleft">
               
                <span>Projects I've</span>
                <span>worked in..</span>
                <span>I have worked on several team projects under the clubs and societies as well as on individual projects in the past one year.I have attached some of my projects here.Also, don't forget to check out my Github profile:</span>
                <a href="https://github.com/bj-jiwrajka/" >
                    <button className='button sbtn'>My Github</button>
                </a>
                </div>

            <div className="sright">
                <div className='srcard'>
                    <Card
                        emoji={weather}
                        heading='MyWeatherWebsite'
                        desc=' It is an API based weather application It is an API based weather application It is an API based weather application It is an API based weather application 

                         '
                         link='https://bj-jiwrajka.github.io/first_weather_website/'

                    
                    />

                </div>


                <div className='srcard '>
                    <Card
                        emoji={food}
                        heading='MyOnlineMeal'
                        desc='It is an API based weather application It is an API based weather application It is an API based weather application It is an API based weather application  '
                    link='https://bj-jiwrajka.github.io/first_food_website/'
                        
                    />


                </div>
                <div className='srcard'>
                    <Card
                        emoji={todo}
                        heading='MyToDoList'
                        desc='It is an API based weather application It is an API based weather application It is an API based weather application It is an API based weather application '
                    link='https://bj-jiwrajka.github.io/first_todo_list/'

                    />
                </div>
                <div className='srcard'>
                    <Card
                        emoji={weather}
                        heading='MyPortfolioWebsite'
                        desc=' It is an API based weather application It is an API based weather application It is an API based weather application It is an API based weather application  '
                 link='https://bj-jiwrajka.github.io/my_portfolio_website/'
                        
                    />


                </div>


                <div className='srcard '>
                    <Card
                        emoji={food}
                        heading='CSS Website'
                        desc='It is an API based weather application It is an API based weather application It is an API based weather application It is an API based weather application  '
                        link='https://nitscss.live'
                    />


                </div>
                <div className='srcard'>
                    <Card
                        emoji={todo}
                        heading='GRAFINY'
                        desc='It is an API based weather application It is an API based weather application It is an API based weather application It is an API based weather application '
                        link='   https://deploy-preview-27--grafiny-nits.netlify.app/departments"'
                    />
                 
                </div>
            </div >
        </div >
    )
}

export default Projects
