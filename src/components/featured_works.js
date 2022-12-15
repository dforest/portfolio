import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"

const FeaturedWorks = () => {
  const works = useStaticQuery(graphql`
  {
    allWorksJson(
      limit: 4,
      filter: { featured: { eq: true }}
    ) {
      nodes {
        id
        caption
        slug
        heroimage {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
  `)

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5'>
      {works && works.allWorksJson.nodes.map((item) => {
        return (<Link to={'/works/' + item.slug} key={item.id}>
          <img
            className="w-full aspect-video rounded-md"
            src={item.heroimage && item.heroimage.childImageSharp.fluid.src}
            alt={item.caption}
          />
        </Link>)
      })}
    </div>
  )
}

export default FeaturedWorks
