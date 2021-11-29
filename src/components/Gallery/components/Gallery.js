import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from "gatsby"
import GalleryItem from './GalleryItem'

const Gallery = () => {
  return (
    <div>
      <StaticQuery
        query={graphql`
        {
          allWorksJson {
            nodes {
              caption
              date
              description
              id
              tags
              links
              image {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
        `}
        render={works => works && (<div>
          {works.allWorksJson.nodes.map((obj) => {
          return (<GalleryItem
            key={obj.id}
            id={obj.id}
            image={obj.image && obj.image.childImageSharp.fluid.src}
            tags={obj.tags}
            date={new Date(obj.date)}
            caption={obj.caption}
            description={obj.description}
            links={obj.links}
          />);
          })}
          </div>
        )}
      />

    </div>
  )
}

Gallery.displayName = 'Gallery'
Gallery.propTypes = {
  works: PropTypes.array,
}

export default Gallery
