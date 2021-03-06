/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import { Row, Column } from '../Grid'
import Section from '../Section'

import styles from './styles.module.css'

const Title = ({ name, designation }) => (
  <>
    <h3 style={{ padding: 0, margin: 0 }} className={styles.title}>
      {name}
    </h3>
    <p>{designation}</p>
  </>
)
Title.propTypes = {
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
}

const Card = ({ children }) => <div className={styles.card}>{children}</div>
Card.propTypes = {
  children: PropTypes.node.isRequired,
}

const members = [
  {
    name: 'Kabir Goel',
    designation: 'CEO',
    description: `Kabir is the CEO & technical director at Katang Labs, and the creator of SkyAI. He’s also
    responsible for product design. In his free time, he enjoys building
    things with code.`,
    links: [
      {
        title: 'Email',
        href: 'mailto:kabirgoel.kg@gmail.com',
      },
      {
        title: 'Website',
        href: 'https://kabirgoel.com',
      },
    ],
  },
  {
    name: 'Tanish Goel',
    designation: 'COO',
    description: `Tanish ensures that the team effectively plans and completes day to day tasks and operations. He likes to create creative solutions to problems around him.`,
    links: [
      {
        title: 'Email',
        href: 'mailto:goeltanish15@gmail.com',
      },
      {
        title: 'Website',
        href: 'https://tanishgoel.github.io',
      },
    ],
  },
  {
    name: 'Gayatri Bhattacharya',
    designation: 'CFO',
    description: `Gayatri is the CFO and marketing director. In her spare time she plays the piano, blogs and plays tennis. She’s also given TEDx talks in school.`,
    links: [
      {
        title: 'Email',
        href: 'mailto:gayatribhattacharya014@gmail.com',
      },
    ],
  },
]

const Member = ({ name, designation, description, links }) => (
  <div style={{ marginBottom: '8rem' }}>
    <Title name={name} designation={designation} />
    <Row>
      <Column size="ten">
        <Card>{description}</Card>
      </Column>
    </Row>
    <div>
      {links.map(link => (
        <a style={{ marginRight: '2rem' }} href={link.href}>
          {link.title}
        </a>
      ))}
    </div>
  </div>
)
Member.propTypes = {
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const Team = () => (
  <Section colored>
    <h1>Team</h1>
    {members.map(member => (
      <Member {...member} />
    ))}
  </Section>
)

export default Team
