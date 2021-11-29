import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import hostName from './Common'

const Posts = () => {
  const faviconSrc = (hostname) => {
    return `https://www.google.com/s2/favicons?domain=${hostname}`
  }

  return (<div>
    <StaticQuery
      query={graphql`
      {
        allPostsJson {
          nodes {
            id
            isoDate(formatString: "YYYY.MM.DD")
            link
            title
          }
        }
      }
      `}
      render={posts=> posts && (<div>
        {posts.allPostsJson.nodes.map((obj) => {
          const host = hostName(obj.link)
          return (<article key={obj.id} className="row 75% work-item">
          <div className="12u date">
            <p>{obj.isoDate}</p>
          </div>
          <div className="12u col">
            <a href={obj.link}>
              <p className="title">{obj.title}</p>
              <p className="site">
                <img src={faviconSrc(host)} alt={host} />{host}
              </p>
            </a>
          </div>
        </article>)})}
      </div>)}
    />
  </div>)
}

export default Posts
