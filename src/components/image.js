import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Image = props => {
  const { src, ...otherProps } = props

  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
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

  const image = data.images.edges.find(edge => {
    return edge.node.relativePath === src
  })

  if (!image) {
    return null
  }

  return <Img {...otherProps} fluid={image.node.childImageSharp.fluid} />
}

export default Image
