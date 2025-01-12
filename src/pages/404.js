import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { SEO } from '../components/seo'

const NotFoundPage = ({location}) => (
  <Layout
    location={location}>
      <h1 className='mt-16 text-6xl font-semibold'>
        404 NOT FOUND
      </h1>
      <p className='mt-16 text-2xl'><Link to='/'>{'Back to Top->'}</Link></p>
  </Layout>
)

export const Head = () => (
  <SEO
    title="Page is not found. | Mkit lab."
  />
)


export default NotFoundPage
