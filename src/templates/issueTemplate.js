import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import rehypeReact from 'rehype-react'
import Link from '../components/link'
import Image from '../components/image'
import path from 'path'

export default function IssueTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { fileAbsolutePath, frontmatter, htmlAst, timeToRead } = markdownRemark
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
      a: Link,
      img: props => {
        const { src, ...otherProps } = props
        const _src = path.resolve(path.dirname(fileAbsolutePath), src)
        console.log(_src)
        return (
          <Image src={_src} {...otherProps} />
        )
      }
    },
  }).Compiler
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className='blog-post-container'>
        <div className='blog-post'>
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <p>{timeToRead} min read</p>
          <div className='blog-post-content'>{renderAst(htmlAst)}</div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($fileAbsolutePath: String!) {
    markdownRemark(fileAbsolutePath: { eq: $fileAbsolutePath }) {
      fileAbsolutePath
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
      timeToRead
    }
  }
`
