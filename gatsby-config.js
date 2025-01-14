require("dotenv").config()

console.log(process.env.NOTION_API_TOKEN)
module.exports = {
  siteMetadata: {
    title: `Mkit lab.`,
    description: `Keita MORI / Technical Director, This is my portfolio.`,
    twitterUsername: `@d_forest`,
    siteUrl: `https://mkitlab.com`,
    image: `/images/og_image.png`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'ja'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mkit lab.`,
        short_name: `Mkit lab.`,
        start_url: `/`,
        background_color: `#27343E`,
        theme_color: `#3EB54D`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
            },
          },
          {
            resolve: `gatsby-remark-images-remote`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 900,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: `language-`,
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `@okaryo/gatsby-remark-link-card`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-notion-api`,
      options: {
        token: process.env.NOTION_TOKEN,
        databaseId: process.env.NOTION_DATABASE_ID,
        propsToFrontmatter: true,
        lowerTitleLevel: true,
      },
    },
  ],
}
