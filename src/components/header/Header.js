import React from 'react'
import Logo from '../../images/logo.svg'
import Button from '../common/button/Button'
import './header.css'

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
        <div className="container-for-button">
        <Button buttonText={"Login"} border={"none"} backgroundColor={"white"} color={"hsl(0, 0%, 75%)"}/>
        <Button buttonText={"Sign Up"} border={"2px solid hsl(180, 66%, 49%)"} backgroundColor={"hsl(180, 66%, 49%)"} color={"white"} borderRadius={"25px"}/>
        </div>

    </header>
  )
}

export default Header