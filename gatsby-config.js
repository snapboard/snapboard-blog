require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Snap / Blog`,
    author: `Calum Moore`,
    description: `Join me as I take on my next challenge of scaling Snapboard to a profitable business!`,
    siteUrl: `https://snapboard.io/blog`,
    image: 'https://snapboard.io/blog/social.png',
    social: {
      twitter: `snapboardio`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-youtube-v2`,
      options: {
        channelId: ['UCGgMsWaz700FSOjsSriXs5w'],
        apiKey: process.env.YOUTUBE_KEY,
        maxVideos: 50, // Defaults to 50
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/weekly`,
        name: `weekly`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 661,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-144128203-1',
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Snapobard Blog`,
        short_name: `SB`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-postcss`,
    // 'gatsby-redirect-from',
    // 'gatsby-plugin-meta-redirect',
  ],
}
