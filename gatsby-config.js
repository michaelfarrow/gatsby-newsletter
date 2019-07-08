const TITLE = 'Creative Technology Roundup'
const TITLE_SHORT = 'CTR'
const DESCRIPTION = 'Sights and sounds from the Creative Technology world'
const AUTHOR = '@MichaelFarrow'
const UI_COLOUR = '#000000'

const SITE_BASE_URL = process.env.SITE_BASE_URL || ''
const PATH_PREFIX =
  process.env.PATH_PREFIX !== undefined
    ? process.env.PATH_PREFIX
    : 'gatsby-newsletter'

module.exports = {
  pathPrefix: PATH_PREFIX,
  siteMetadata: {
    siteBaseUrl: SITE_BASE_URL,
    title: TITLE,
    description: DESCRIPTION,
    author: AUTHOR,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          '@lib': './lib',
          '@components': './components',
          '@styles': './styles',
        },
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: TITLE,
        short_name: TITLE_SHORT,
        start_url: `/${PATH_PREFIX.length ? `${PATH_PREFIX}/` : ''}`,
        background_color: UI_COLOUR,
        theme_color: UI_COLOUR,
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        modifyUrlPrefix: {
          '/': `${PATH_PREFIX}/`,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/issues`,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
      },
    },
  ],
}
