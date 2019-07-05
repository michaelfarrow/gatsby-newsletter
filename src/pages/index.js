import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Link from '../components/link'

const IndexPage = () => (
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
  </Layout>
)

export default IndexPage
