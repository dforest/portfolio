module.exports = {
  siteMetadata: {
    title: `Mkit lab.`,
    author: `Keita MORI`,
    description: `Keita MORI / App Engineer, This is my portfolio.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`
  ],
}
