import React from 'react'
import '../styles/globals.css'

import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import Header from './header'

const Layout = ({ children, location, title, headerDisplayPos }) => {
  return (
    <>
      <Header location={location} displayPos={headerDisplayPos}/>

      <div className='mx-8'>
        <div className='container mx-auto max-w-4xl pt-8'>

          {children}

          <footer className='mt-56 pt-6 pb-16'>
            <p className='space-x-8 mb-8'>
              <a href="https://twitter.com/d_forest" target='_blank' rel='noopener noreferrer' className='text-4xl'>
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
              <a href="https://www.instagram.com/d_forest/" target='_blank' rel='noopener noreferrer' className='text-4xl'>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://github.com/dforest" target='_blank' rel='noopener noreferrer' className='text-4xl'>
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/keitamori/" target='_blank' rel='noopener noreferrer' className='text-4xl'>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </p>
            <p className='text-sm'>© {moment().year()} Keita MORI</p>
          </footer>
        </div>
      </div>
    </>
  )
}

export default Layout
