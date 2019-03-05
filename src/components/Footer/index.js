/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'

import Section from '../Section'

import styles from './styles.module.css'

const Footer = () => (
  <Section colored>
    <p className={styles.p}>
      © {new Date().getFullYear()} Katang Labs. Built by Kabir Goel.
    </p>
  </Section>
)

export default Footer
