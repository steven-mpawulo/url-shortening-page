import React from 'react'
import './card.css'

const Card = ({icon, title, message}) => {
  return (
    <div className="card">
        <div className="container-for-icon">
        <img src={icon} alt="icon"  className='icon'/>
        </div>
        <h3>{title}</h3>
        <p>{message}</p>
    </div>
  )
}

export default Card