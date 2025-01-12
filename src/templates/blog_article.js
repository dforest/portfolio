import React from 'react'
import { Link, graphql } from "gatsby"

import Layout from '../components/layout'
import formatCategory from '../utils/formatCategory'
import { SEO } from '../components/seo'


const BlogPost = ({data, location}) => {
  const item = data.markdownRemark
  const cover = data.cover.nodes[0]
  const imageUrl = cover.raw.cover.type === 'external' ? cover.raw.cover.external.url : cover.raw.cover.file.url

  return (
    <Layout
      location={location}
      title={item.frontmatter.title}
    >
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <div className='w-full aspect-video overflow-hidden rounded-lg mb-16'>
            {
              <img className='w-full h-full object-cover' src={imageUrl} alt={item.frontmatter.title + "'s main image"} />
            }
          </div>
          <p className='blog-info'>
              <Link href={`/blog/${formatCategory(item.frontmatter.Category.name)}`} className='inline-block px-2 py-2 rounded-lg mr-4 border border-white/10 blog-card'>
                {item.frontmatter.Category.name}
              </Link>
              {item.frontmatter.Date.start}
          </p>
          <h1>
            {item.frontmatter.title}
          </h1>
        </header>

        <div className='content'>
          <section
            dangerouslySetInnerHTML={{ __html: item.html }}
            itemProp="articleBody"
          />
        </div>
      </article>

    </Layout>
  )
}

export const Head = ({ data }) => (
  <SEO
    title={`${data.markdownRemark.frontmatter.title} | Mkit lab.`}
    description={data.markdownRemark.excerpt}
  />
)

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $slug: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    markdownRemark(id: {eq: $id}) {
      id
      html
      excerpt
      frontmatter {
        title
        Slug
        Category {
          name
        }
        Date {
          start(formatString: "YYYY.MM.DD")
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      frontmatter {
        title
        Slug
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      frontmatter {
        title
        Slug
      }
    }
    cover: allNotion(
      filter: {properties: {Slug: {value: {eq: $slug}}}}
    ) {
      nodes {
        raw {
          cover {
            type
            external {
              url
            }
            file {
              url
            }
          }
        }
      }
    }
  }
`

export default BlogPost
