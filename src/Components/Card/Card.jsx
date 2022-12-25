import React from 'react'
import './Card.css'

const Card = ({emoji,heading,desc,button}) => {
  return (
   <div className="card">
    <img src={emoji} alt="" />
    <span>{heading}</span>
    <span>{desc}</span>

   </div>
  )
}

export default Card
