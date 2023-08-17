import React from 'react'

const Card = ({icon, title, message}) => {
  return (
    <div className="card">
        <img src={icon} alt="icon"  className='icon'/>
        <h3>{title}</h3>
        <p>{message}</p>
    </div>
  )
}

export default Card