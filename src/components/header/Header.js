import React from 'react'
import Logo from '../../images/logo.svg'
import Button from '../common/button/Button'

const Header = () => {
  return (
    <header>
        <img src={Logo} alt="logo" />
        <nav>
        <ul>
            <li><a href="#Features">Features</a></li>
            <li><a href="#Pricing">Pricing</a></li>
            <li><a href="#Resources">Resources</a></li>
        </ul>
        </nav>
        <Button buttonText={"Login"}/>
        <Button buttonText={"Sign Up"}/>

    </header>
  )
}

export default Header