import React from 'react'
import { graphql } from 'gatsby'
import rehypeReact from 'rehype-react'
import path from 'path'
import { flatten } from 'lodash'

import { addDate } from '@lib/issue'
import { DATE_FORMAT_FRIENDLY } from '@lib/date'
import Layout from '@components/layout'
import SEO from '@components/seo'
import Link from '@components/link'
import Image from '@components/image'

const getNodeText = node => {
  return flatten(
    node.children.map(child => {
      if (child.type === 'text') return child.value
      return getNodeText(child)
    })
  ).join('')
}

export default function IssueTemplate({ data }) {
  const { issue } = data
  const _issue = addDate(issue)
  const { fileAbsolutePath, headings, htmlAst, timeToRead, date } = _issue
  const h1s = headings.filter(heading => heading.depth === 1)
  const title = h1s.length ? h1s[0].value : 'Creative Technology Roundup'
  const paragraphs = htmlAst.children.filter(child => child.tagName === 'p')
  const exerpt = getNodeText(paragraphs[0])
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
      <SEO title={title} description={exerpt} />
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
