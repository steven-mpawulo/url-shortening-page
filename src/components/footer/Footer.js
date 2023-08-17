import React from 'react'
import Logo from '../../images/logo.svg'
import FacebookIcon from '../../images/icon-facebook.svg'
import TwitterIcon from '../../images/icon-twitter.svg'
import PinterestIcon from '../../images/icon-pinterest.svg'
import InstagramIcon from '../../images/icon-instagram.svg'
import './footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="footer-first-column">
            <img src={Logo} alt="logo" className='footer-logo'/>
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
        <div className="footer-icons-container">
            <img src={FacebookIcon} alt="facebook-icon" />
            <img src={TwitterIcon} alt="twitter-icon" />
            <img src={PinterestIcon} alt="pinterest-icon" />
            <img src={InstagramIcon} alt="instagram-icon" />
        </div>
    </footer>
  )
}

export default Footer