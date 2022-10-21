import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <p className="image avatar">
        <img src={avatar} alt="" />
      </p>
      <h1>
        <strong>Keita MORI</strong> / App Engineer
        <small><i>This is my portfolio, <strong>Mkit lab.</strong></i></small>
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
