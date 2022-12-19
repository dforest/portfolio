import React from 'react'
import Helmet from 'react-helmet'
import '../assets/scss/main.scss'

import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import Header from './header'

const Layout = ({ children, location, title, headerDisplayPos }) => {
  const siteTitle = title ? title + ' - Mkit lab.' : 'Mkit lab.'
  const siteDescription = 'Keita Mori - Technical Director, Technical Project Manager, Software Engineer and Indie Game Developer.'
  const siteUrl =  'https://mkitlab.com'
  const siteImage =  '/images/og_image.png'
  const twitterUserName = '@d_forest'

  return (
    <>
      <Helmet>
        <title>{siteTitle}</title>
        <meta http-equiv="content-language" content="ja" />
        <meta name="description" content={siteDescription} />
        <meta name="og:image" content={siteUrl + siteImage} />
        <meta name="og:title" content={siteTitle} />
        <meta name="og:description" content={siteDescription} />
        <meta name="og:url" content={siteUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={twitterUserName} />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={siteUrl + siteImage} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Helmet>

      <Header location={location} displayPos={headerDisplayPos}/>

      <div className='mx-8'>
        <div className='container mx-auto max-w-4xl pt-8'>

          {children}

          <footer className='mt-56 pt-6 pb-16'>
            <p className='space-x-8 mb-8'>
              <a href="https://twitter.com/d_forest" target='_blank' rel='noopener noreferrer' className='text-4xl'>
                <FontAwesomeIcon icon={faTwitter} />
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
