import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

function findImage(images, src) {
  return images.edges.find(edge => {
    return edge.node.relativePath === src || edge.node.absolutePath === src
  })
}

export function getImageSocial(src) {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            absolutePath
            relativePath
            name
            childImageSharp {
              fixed(width: 600, height: 600) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)
  return findImage(data.images, src)
}

export function getImage(src) {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            absolutePath
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return findImage(data.images, src)
}

const Image = props => {
  const { src, ...otherProps } = props
  const image = getImage(src)

  if (!image) {
    return <img alt='' {...otherProps} src='' />
  }

  return (
    <Img
      Tag='span'
      alt=''
      {...otherProps}
      fluid={image.node.childImageSharp.fluid}
    />
  )
}

export default Image
