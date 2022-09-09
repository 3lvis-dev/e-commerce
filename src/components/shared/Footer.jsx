import React from 'react'
import { NavLink } from 'react-router-dom'
import './style/footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className="copyright">
          © Elvis Espinoza 2022
        </div>

        <div className="footer__social-media">
          <a href='https://www.instagram.com/hypnos_insigne/' target='_blank'>
            <i className='bx bxl-instagram'></i>
          </a>
          <a href="https://www.linkedin.com/in/elvis-alexander-espinoza-/" target='_blank'>
            <i className='bx bxl-linkedin-square'></i>
          </a>
          <a href="https://github.com/3lvis-dev" target='_blank'>
            <i className='bx bxl-github'></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer