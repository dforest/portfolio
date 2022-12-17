import React from 'react'

import moment from 'moment'

import Layout from '../components/layout'


const About = ({location, pageContext}) => {
  const { work } = pageContext
  return (
    <Layout
      location={location}
      title={work.caption}
    >
      <img className='mt-16 rounded-md' src={work.heroimage.childImageSharp.gatsbyImageData.images.fallback.src} alt={work.caption + "'s main visual"} />
      <h1 className='mt-14 font-bold works'>
        {work.caption}
      </h1>

      <p className='mt-14 text-2xl font-medium'>{work.role}</p>
      <ul className='flex space-x-2 mt-2'>
        {work.tags.map(tag => (<li>{'#' + tag}</li>))}
      </ul>

      <p className='mt-14'>{work.description}</p>

      <ul className='mt-8 space-y-2'>
        {work.links.map(link => (
          <li><a href={link} className='sub text-sm' target='_blank' rel='noopener noreferrer'>{link}</a></li>
        ))}
      </ul>

      <p className='font-medium mt-16'>{work.company}</p>
      <p className='mt-2'>{moment(work.date).format('Y.MM')}</p>

      {work.images.length > 0 && (
        <ul className='mt-14'>
          {work.images.map(image => (
            <li className='mt-4'>
              <img className='rounded-md' src={image.childImageSharp.gatsbyImageData.images.fallback.src} alt={work.caption + "'s image"} />
            </li>
          ))}
        </ul>
      )}


    </Layout>
  )
}

export default About
