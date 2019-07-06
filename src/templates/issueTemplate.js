import React from 'react'
import { graphql } from 'gatsby'

import { addDate } from '../lib/issue'
import { DATE_FORMAT_FRIENDLY } from '../lib/date'
import Layout from '../components/layout'
import SEO from '../components/seo'
import rehypeReact from 'rehype-react'
import Link from '../components/link'
import Image from '../components/image'
import path from 'path'

export default function IssueTemplate({ data }) {
  const { issue } = data
  const _issue = addDate(issue)
  const { fileAbsolutePath, headings, htmlAst, timeToRead, date } = _issue
  const h1s = headings.filter(heading => heading.depth === 1)
  const title = h1s.length ? h1s[0].value : 'Creative Technology Roundup'
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
      a: Link,
      img: props => {
        const { src, ...otherProps } = props
        const _src = path.resolve(path.dirname(fileAbsolutePath), src)
        return <Image src={_src} {...otherProps} />
      },
      h1: props => null,
    },
  }).Compiler
  return (
    <Layout>
      <SEO title={title} />
      <div className='blog-post-container'>
        <div className='blog-post'>
          <h1>{title}</h1>
          <h2>{date.format(DATE_FORMAT_FRIENDLY)}</h2>
          <p>{timeToRead} min read</p>
          <div className='blog-post-content'>{renderAst(htmlAst)}</div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($fileAbsolutePath: String!) {
    issue: markdownRemark(fileAbsolutePath: { eq: $fileAbsolutePath }) {
      fileAbsolutePath
      headings {
        depth
        value
      }
      htmlAst
      timeToRead
    }
  }
`
