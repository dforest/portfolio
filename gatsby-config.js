module.exports = {
  siteMetadata: {
    title: `Mkit lab.`,
    author: `Keita MOri`,
    description: `Keita Mori / App Engineer, This is my portfolio.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mkit lab.`,
        short_name: `Mkit lab.`,
        start_url: `/`,
        background_color: `#33434f`,
        theme_color: `#49bf5f`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.png`, // This path is relative to the root of the site.
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
    `gatsby-plugin-sass`
  ],
}
