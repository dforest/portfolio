/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const formatCategory = (category) => {
    return category.replace(/^\p{Emoji_Presentation}\s+/u, "").toLowerCase();
  };

  await graphql(`
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

  await graphql(`
    query {
      allNotion(filter: { properties: { Published: { value: { eq: true } } } }) {
        nodes {
          properties {
            Category {
              value {
                name
              }
            }
          }
        }
      }
    }
  `).then(result => {
    const categories = Array.from(
      new Set(result.data.allNotion.nodes.map((post) => post.properties.Category.value.name))
    ).map((category) => ({
      name: category,
      pathName: formatCategory(category),
    }))

    categories.forEach(category => {
      const formattedCategory = formatCategory(category.pathName)
      createPage({
        path: `/blog/categories/${formattedCategory}`,
        component: path.resolve("./src/templates/blog_category.js"),
        context: {
          categories,
          category: category.name,
        },
      })
    })
  })

  await graphql(`
    {
      allMarkdownRemark(
        filter: {frontmatter: {Published: {eq: true}}}
        sort: {frontmatter: {Date: {start: DESC}}}
      ) {
        nodes {
          id
          frontmatter {
            title
            Published
            Slug
            Date{
              start(formatString: "YYYY.MM.DD")
            }
          }
        }
      }
    }
  `).then(result => {
    const posts = result.data.allMarkdownRemark.nodes

    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: `/blog/articles/${post.frontmatter.Slug}`,
        component: path.resolve(`./src/templates/blog_article.js`),
        context: {
          id: post.id,
          slug: post.frontmatter.Slug,
          previousPostId,
          nextPostId,
        },
      })
    })
  })
}
