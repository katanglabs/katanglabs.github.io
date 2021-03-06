import React from 'react'

import Layout from '../components/Layout'
import Team from '../components/Team'
import SEO from '../components/SEO'
import Section from '../components/Section'
import Footer from '../components/Footer'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Section colored>
      <hr style={{ width: 45 }} />
    </Section>
    <Team />
    <Footer />
  </Layout>
)

export default IndexPage
