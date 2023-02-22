import React from 'react'
import './Card.css'
import { Icon } from "@iconify/react";
const Card = ({ emoji, heading, desc, link }) => {
  return (
    <>

      <div className="card">
        <img src={emoji} alt="" />
        <a href={link} target="_blank" rel='noreferrer'>
        <Icon icon='octicon:cross-reference-24' />
        <span className="cardHeading">
          {heading}</span>
        </a>
       
        <span>{desc}</span>
      </div>

    </>
  )
}
export default Card
