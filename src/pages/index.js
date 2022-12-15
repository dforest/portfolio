import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import FeaturedWorks from '../components/featured_works'
import Posts from  '../components/posts'
import HeaderTitle from '../images/title.svg'


const HomeIndex = () => {
  const siteTitle = 'Mkit lab.'
  const siteDescription = 'Keita Mori / App Engineer, This is my portfolio.'
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
      </Helmet>

      <header className='navbar px-8'>
        <div className='container mx-auto max-w-4xl'>
          <ul className='flex items-center space-x-7'>
            <li className='mr-4 md:mr-12'><img src={HeaderTitle} alt='Mkit lab.' className='w-[125px]' /></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/works'>Works</Link></li>
            <li><Link to='/posts'>Posts</Link></li>
          </ul>
        </div>
      </header>

      <div className='mx-8'>
        <div className='container mx-auto max-w-4xl pt-16'>
          <h1><img src={HeaderTitle} alt='Mkit lab.' className='w-[237px]'/></h1>

          <p className='mt-8'><span className='font-bold text-white-700'>Keita MORI</span> - Technical Director, Technical Project Manager, Software Engineer and Indie Game Developer.</p>
          <p className='mt-4'><Link to='/about'>{'About ME ->'}</Link></p>

          <section className='mt-[5.75rem]'>
            <h2 className='mb-4'>Works</h2>
            <FeaturedWorks />
            <p className='mt-3 md:mt-6'><Link to='/works'>{'See MORE ->'}</Link></p>
          </section>
          <section className='mt-[5.75rem]'>
            <h2 className='mb-4'>Posts</h2>
            <Posts limit={3}/>
            <p><Link to='/posts'>{'See MORE ->'}</Link></p>
          </section>

          <footer className='mt-56 pt-6 pb-16'>
            <p className='space-x-8 mb-8'>
              <a href="https://twitter.com/d_forest" target='_blank' rel='noopener norefferer' className='text-4xl'>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://github.com/dforest" target='_blank' rel='noopener norefferer' className='text-4xl'>
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/keitamori/" target='_blank' rel='noopener norefferer' className='text-4xl'>
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

export default HomeIndex
