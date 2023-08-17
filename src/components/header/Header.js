import React from 'react'
import Logo from '../../images/logo.svg'

const Header = () => {
  return (
    <header>
        <img src={Logo} alt="logo" />
        <nav>
        <ul>
            <li><a href="#Features">Features</a></li>
            <li><a href="#Pricing"></a>Pricing</li>
            <li><a href="#Resources"></a>Resources</li>
        </ul>
        </nav>

    </header>
  )
}

export default Header