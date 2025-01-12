import React from "react";
import { graphql } from "gatsby";

import moment from 'moment'

import Layout from "../components/layout";
import BlogPosts from "../components/blog_posts";
import BlogCategories from '../components/blog_categories'
import { SEO } from "../components/seo";

const BlogCategory = ({ data, location, pageContext }) => {
  const { categories, category } = pageContext

  const groupby = (data) => {
    const groups = []
    let group = []
    let year = 0

    data.allNotion.nodes.forEach(item => {
      const time = moment(item.properties.Date.value.startRaw, 'YYYY-MM-DD')
      if(year !== time.year()) {
        group = []
        groups.push(group)
      }
      group.push(item)
      year = time.year()
    })

    return groups
  }

  return (
    <Layout
      location={location}
    >
      <h1 className='mt-16 text-6xl font-semibold'>
        Blog.<span className="invisible">{` (${category})`}</span>
      </h1>

      <div className="my-10">
        <BlogCategories categories={categories} location={location} />
      </div>

      <div className='axis-container mt-5'>
        {groupby(data).map(group => {
          const year = moment(group[0].properties.Date.value.startRaw, 'YYYY-MM-DD').format('YYYY')
          return (
            <section key={year} className='flex'>
              <header className='basis-15 md:basis-16'>
                <p className='axis-year text-xl md:text-2xl'>{year}</p>
              </header>
              <div className='flex-1 border-l-2 border-white/20 ml-4 pl-5'>
                <BlogPosts posts={group} />
              </div>
            </section>
          )
        })}
      </div>

    </Layout>
  )
}

export const Head = ({ pageContext }) => (
  <SEO
    title={`Blog. (${pageContext.category}) | Mkit lab.`}
    description="Explore the blog posts by Keita MORI on movie, book, game, and more."
  />
)

export const query = graphql`
  query($category: String!) {
    allNotion(
    filter: {
      properties: {
        Published: {value: {eq: true}}
        Category: {value: {name: {eq: $category}}}
      }
    }
      sort: {properties: {Date: {value: {start: DESC}}}}
    ) {
      nodes {
        id
        title
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
        properties {
          Slug {
            value
          }
          Category {
            value {
              name
            }
          }
          Date {
            value {
              start(formatString: "YYYY.MM.DD")
              startRaw: start
            }
          }
          Published {
            value
          }
        }
      }
    }
  }
`

export default BlogCategory
