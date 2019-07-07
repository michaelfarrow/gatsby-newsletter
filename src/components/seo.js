import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import { WithImage } from '@components/image'

const DEFAULT_IMAGE = 'gatsby-icon.png'

function SEO({ description, lang, meta, title, type, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteBaseUrl
            title
            description
            author
          }
        }
      }
    `
  )

  const siteBaseUrl = site.siteMetadata.siteBaseUrl || ''
  const metaDescription = description || site.siteMetadata.description
  const metaType = type || 'website'

  const optional = []

  return (
    <WithImage src={DEFAULT_IMAGE} type='imagesSocial'>
      {defaultImage => {
        if (image || defaultImage) {
          const _image =
            image ||
            (defaultImage && defaultImage.node.childImageSharp.fixed.src)
          if (_image) {
            optional.push({
              property: 'og:image',
              content: `${siteBaseUrl}${_image}`,
            })
          }
        }
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
              {
                name: 'description',
                content: metaDescription,
              },
              {
                property: 'og:title',
                content: title,
              },
              {
                property: 'og:description',
                content: metaDescription,
              },
              {
                property: 'og:type',
                content: metaType,
              },
              {
                name: 'twitter:card',
                content: 'summary',
              },
              {
                name: 'twitter:creator',
                content: site.siteMetadata.author,
              },
              {
                name: 'twitter:title',
                content: title,
              },
              {
                name: 'twitter:description',
                content: metaDescription,
              },
            ]
              .concat(optional)
              .concat(meta)}
          />
        )
      }}
    </WithImage>
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
