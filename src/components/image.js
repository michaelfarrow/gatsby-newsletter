import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

function findImage(data, src, type = 'images') {
  const _data = data ? data[type] : null
  if (!_data) return null
  return _data.edges.find(edge => {
    return edge.node.relativePath === src || edge.node.absolutePath === src
  })
}

export const WithImage = props => {
  const { src, children, type } = props
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
      imagesSocial: allFile {
        edges {
          node {
            absolutePath
            relativePath
            name
            childImageSharp {
              fixed(width: 1200, height: 630) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)
  const image = findImage(data, src, type)
  return children(image)
}

const Image = props => {
  const { src, ...otherProps } = props

  return (
    <WithImage src={src}>
      {image => {
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
      }}
    </WithImage>
  )
}

export default Image
