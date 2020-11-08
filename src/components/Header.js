import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>Keita Mori</strong> / App Engineer
        <small><i>This is my portfolio, <strong>mkit lab.</strong></i></small>
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
