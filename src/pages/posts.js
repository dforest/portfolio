import React from 'react'

import Layout from '../components/layout'
import Posts from '../components/posts'
import { SEO } from '../components/seo'


const Works = ({location}) => {

  return (
    <Layout
      location={location}
    >
      <h1 className='mt-16 text-6xl font-semibold'>
        Other Posts.
      </h1>

      <div className='mt-5'>
        <Posts/>
      </div>

    </Layout>
  )
}

export const Head = () => (
  <SEO
    title="Other Posts. | Mkit lab."
    description="Explore the posts by Keita MORI from other services such as Note, Zenn, and more."
  />
)


export default Works
