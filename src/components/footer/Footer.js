import React from 'react'
import Logo from '../../images/logo.svg'

const Footer = () => {
  return (
    <footer>
        <div className="footer-first-column">
            <img src={Logo} alt="logo" />
        </div>
        <div className="footer-second-column">
            <ul>
                <li>Features</li>
                <li><a href="#Link Shortening">Link Shortening</a></li>
                <li><a href="#Branded Links">Branded Links</a></li>
                <li><a href="#Analytics">Analytics</a></li>
            </ul>
        </div>
        <div className="footer-third-column">
            <ul>
                <li>Resources</li>
                <li><a href="#Blog">Blog</a></li>
                <li><a href="#Developers">Developers</a></li>
                <li><a href="#Support">Support</a></li>
            </ul>
        </div>
        <div className="footer-fourth-column">
            <ul>
                <li>Company</li>
                <li><a href="#About">About</a></li>
                <li><a href="#Our tema">Our Team</a></li>
                <li><a href="#Careers">Careers</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer