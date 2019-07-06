import React from 'react'
import { graphql } from 'gatsby'
import { orderBy } from 'lodash'

import { addDates } from '@lib/issue'
import { DATE_FORMAT_FRIENDLY } from '@lib/date'
import Layout from '@components/layout'
import Image from '@components/image'
import SEO from '@components/seo'
import Link from '@components/link'

const IndexPage = ({ data }) => {
  const { issues } = data
  const issueEdges = orderBy(addDates(issues).edges, 'node.date', 'desc')
  return (
    <Layout>
      <SEO title='Home' />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link href='https://google.co.uk'>Google</Link>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image src='gatsby-astronaut.png' />
      </div>
      <Link href='/page-2/'>Go to page 2</Link>
      <ul>
        {issueEdges.map((issue, i) => {
          return (
            <li key={issue.node.id}>
              <Link href={`/issue/${issue.node.dateStr}`}>
                Issue #{issueEdges.length - i} -{' '}
                {issue.node.date.format(DATE_FORMAT_FRIENDLY)}
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    issues: allMarkdownRemark {
      edges {
        node {
          id
          fileAbsolutePath
        }
      }
    }
  }
`

export default IndexPage
