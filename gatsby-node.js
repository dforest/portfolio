/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
const data = require('./src/data/works.json')

exports.createPages = (({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWorksJson {
        nodes {
          id
          caption
          company
          description
          slug
          date
          tags
          role
          links
          heroimage {
            childImageSharp {
              gatsbyImageData(layout: FIXED)
            }
          }
          images {
            childImageSharp {
              gatsbyImageData(layout: FIXED)
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allWorksJson.nodes.forEach((work) => {
      createPage({
        path: `/works/${work.slug}`,
        component: path.resolve(`src/templates/work_id.js`),
        context: { work }
      })
    })
  })
})
