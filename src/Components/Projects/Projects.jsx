import React from 'react'
import './Projects.css'
import todo from '../../img/todolist.jpg';
import weather from '../../img/myweatherweb.png';
import food from '../../img/myonlinemeal.jpg';
import Card from '../Card/Card';
const Projects = () => {
    return (
        <div className="projects">
            <div className="sleft">
                <span>Projects I've</span>
                <span>worked in..</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nam voluptatem assumenda beatae fuga aperiam at tempore quia exercitationem sit.</span>
                <a href="https://github.com/bj-jiwrajka/" >
                    <button className='button sbtn'>My Github</button>
                </a>            </div>

            <div className="sright">
                <div style={{ top: "2rem", left: "-4rem" }}>
                    <Card
                        emoji={weather}
                        heading='MyWeatherWebsite'
                        desc=' It is an API based weather application '
                    />
                    <a href="https://bj-jiwrajka.github.io/first_weather_website/">
                        <button className='button pbtn'>Visit here</button></a>

                </div>


                <div style={{ top: "2rem", left: "4rem" }}>
                    <Card
                        emoji={food}
                        heading='MyOnlineMeal'
                        desc='Online Food delivery website '
                    />
                    <a href="https://bj-jiwrajka.github.io/first_food_website/">
                        <button className='button pbtn'>Visit here</button></a>


                </div>
                <div style={{ top: "2rem", left: "-4rem" }}>
                    <Card
                        emoji={todo}
                        heading='MyToDoList'
                        desc='A basic todo list using Javascript '
                    />
                    <a href="https://bj-jiwrajka.github.io/first_todo_list/">
                        <button className='button pbtn'>Visit here</button></a>
                </div>

            </div >
        </div >
    )
}

export default Projects
