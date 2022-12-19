import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import moment from 'moment'

const Posts = ({limit}) => {
  const faviconSrc = (hostname) => {
    return `https://www.google.com/s2/favicons?domain=${hostname}`
  }

  const hostname = (str) => {
    const url = new URL(str)
    return url.hostname
  }

  const groupby = (posts, limit) => {
    const groups = []
    let group = []
    let year = 0
    let index = 0

    posts.allPostsJson.nodes.forEach(post => {
      if(!limit || index < limit) {
        const time = moment(post.isoDate)
        if(year !== time.year()) {
          group = []
          groups.push(group)
        }
        group.push(post)
        year = time.year()
        index++
      }
    })

    return groups
  }

  const posts = useStaticQuery(graphql`
  {
    allPostsJson {
      nodes {
        id
        title
        isoDate
        link
      }
    }
  }
  `)


  return (<div className='axis-container'>
    {groupby(posts, limit).map(group => {
      const year = moment(group[0].isoDate).format('Y')
      return (
        <section key={year} className='flex'>
          <header className='basis-15 md:basis-16'>
            <p className='axis-year text-xl md:text-2xl'>{year}</p>
          </header>
          <div className='flex-1'>
            {group.map(post => {
              const host = hostname(post.link)
              return (
                <div key={post.id} className="ml-4 pl-5 pb-16 axis-item post">
                  <div className='axis-point'></div>
                  <div className='font-medium text-sm md:text-base'>{moment(post.isoDate).format('M.D')}</div>
                  <a href={post.link} className='axis-card px-6 py-8 mt-2 rounded-md block' target='_blank' rel='noopener noreferrer'>
                    <div className='axis-title text-base md:text-lg font-semibold mb-2'>{post.title}</div>
                    <img src={faviconSrc(host)} alt="" className='inline mr-2'/><span className='font-normal text-sm'>{host}</span>
                  </a>
                </div>
              )
            })}
          </div>
        </section>
      )
    })}
  </div>)
}

export default Posts
