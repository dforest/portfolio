import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const NotFoundPage = ({location}) => (
  <Layout
    location={location}
    title="Page is not found.">
      <h1 className='mt-16 text-6xl font-semibold'>
        404 NOT FOUND
      </h1>
      <p className='mt-16 text-2xl'><Link to='/'>{'Back to Top->'}</Link></p>
  </Layout>
)

export default NotFoundPage
