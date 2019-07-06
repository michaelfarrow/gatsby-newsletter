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

  const image = data.images.edges.find(edge => {
    return edge.node.relativePath === src || edge.node.absolutePath === src
  })

  if (!image) {
    return <img alt='' {...otherProps} src='' />
  }

  return <Img Tag='span' alt='' {...otherProps} fluid={image.node.childImageSharp.fluid} />
}

export default Image
