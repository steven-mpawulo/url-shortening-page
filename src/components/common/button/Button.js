import React from 'react'

const Button = ({ buttonText, color, backgroundColor, border, borderRadius }) => {
    return (
        <button style={{ color: `${color}`, backgroundColor: `${backgroundColor}`, border: `${border}`, borderRadius: `${borderRadius}` }} className='custom-button'>{buttonText}</button>
    )
}

export default Button