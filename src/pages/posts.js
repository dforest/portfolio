import React from 'react'

import Layout from '../components/layout'
import Posts from '../components/posts'


const Works = ({location}) => {

  return (
    <Layout
      location={location}
      title='Posts.'
    >
      <h1 className='mt-16 text-6xl font-semibold'>
        Posts.
      </h1>

      <div className='mt-5'>
        <Posts/>
      </div>

    </Layout>
  )
}

export default Works
