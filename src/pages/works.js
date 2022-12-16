import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"

import moment from 'moment'

import Layout from '../components/layout'


const Works = ({location}) => {

  const groupby = (works) => {
    const groups = []
    let group = []
    let year = 0

    works.allWorksJson.nodes.forEach(work => {
      const time = moment(work.date)
      console.log(time.year())
      if(year !== time.year()) {
        group = []
        groups.push(group)
      }
      group.push(work)
      year = time.year()
    })

    return groups
  }

  const works = useStaticQuery(graphql`
  {
    allWorksJson {
      nodes {
        id
        caption
        slug
        date
        tags
        role
        heroimage {
          childImageSharp {
            gatsbyImageData(layout: FIXED)
          }
        }
      }
    }
  }
  `)

  return (
    <Layout
      location={location}
      title='Works.'
    >
      <h1 className='mt-16 text-6xl font-semibold'>
        Works.
      </h1>

      <div className='axis-container mt-5'>
        {groupby(works).map(group => {
          const year = moment(group[0].date).format('Y')
          return (
            <section key={year} className='flex'>
              <header className='basis-15 md:basis-16'>
                <p className='axis-year text-xl md:text-2xl'>{year}</p>
              </header>
              <div className='flex-1'>
                {group.map(work => {
                  return (
                    <div key={work.id} className="ml-4 pl-5 pb-16 axis-item">
                      <Link to={'/works/' + work.slug}>
                        <img src={work.heroimage.childImageSharp.gatsbyImageData.images.fallback.src} alt={work.caption} className='rounded-md'/>
                      </Link>
                      <p className='mt-4'>{work.role}</p>
                      <ul className='flex space-x-2 text-sm mt-2'>
                        {work.tags.map(tag => (<li>{'#' + tag}</li>))}
                      </ul>
                      <p className='mt-4'>
                        <Link to={'/works/' + work.slug}>{'See MORE->'}</Link>
                      </p>
                    </div>
                  )
                })}
              </div>
            </section>
          )
        })}
      </div>

    </Layout>
  )
}

export default Works
