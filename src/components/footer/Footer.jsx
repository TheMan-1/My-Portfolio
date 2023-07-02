import React from 'react'
import './footer.css'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Gage Woodall</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>


      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/gage-woodall/" target="_blank"><BsLinkedin /></a>
        <a href="https://www.instagram.com/gage.codes/" target="_blank"><BsInstagram /></a>
        <a href="https://twitter.com/Codes_Gage" target="_blank"><BsTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Gage.Codes All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer