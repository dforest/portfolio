import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const Posts = () => {
  const posts = useStaticQuery(graphql`
  {
    allPostsJson {
      nodes {
        id
        isoDate(fromNow: true)
        link
        title
      }
    }
  }
  `)

  const hostName = (str) => {
    const url = new URL(str)
    return (url && url.hostname) || "blog"
  }

  const faviconSrc = (hostname) => {
    return `http://www.google.com/s2/favicons?domain=${hostname}`
  }

  return (<div>
    {posts && (<div>
      {posts.allPostsJson.nodes.map((obj) => {
        const host = hostName(obj.link)
        return (<article key={obj.id} className="row 75% work-item">
        <div className="12u date">
          <p>{obj.isoDate}</p>
        </div>
        <div className="12u col">
          <a href={obj.link}>
            <h3>{obj.title}</h3>
            <p className="site">
              <img src={faviconSrc(host)} />{host}
            </p>
          </a>
        </div>
      </article>)})}
    </div>)}
  </div>)
}

export default Posts
