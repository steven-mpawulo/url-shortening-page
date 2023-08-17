import React from 'react'

const Button = ({ buttonText, color, backgroundColor, borderRadius }) => {
    return (
        <button style={{ color: `${color}`, backgroundColor: `${backgroundColor}`, border: `2px solid ${backgroundColor}`, borderRadius: `${borderRadius}` }} className='custom-button'>{buttonText}</button>
    )
}

export default Button