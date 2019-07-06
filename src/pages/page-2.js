import React from 'react'

import Layout from '@components/layout'
import SEO from '@components/seo'
import Link from '@components/link'

const SecondPage = () => (
  <Layout>
    <SEO title='Page two' />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link href='/'>Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
