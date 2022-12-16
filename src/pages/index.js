import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import FeaturedWorks from '../components/featured_works'
import Posts from  '../components/posts'
import HeaderTitle from '../images/title.svg'


const HomeIndex = ({location}) => {
  return (
    <Layout
      location={location}
      headerDisplayPos={120}
    >
      <h1>
        <img src={HeaderTitle} alt='Mkit lab.' className='w-[237px]'/>
      </h1>

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
        <p className='mt-3 md:mt-6'><Link to='/posts'>{'See MORE ->'}</Link></p>
      </section>
    </Layout>
  )
}

export default HomeIndex
