/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import { Container } from '../Grid'

import styles from './styles.module.css'

const Section = ({ children, colored }) => (
  <section className={`${styles.section} ${colored ? styles.colored : ''}`}>
    <Container>{children}</Container>
  </section>
)

Section.propTypes = {
  children: PropTypes.node.isRequired,
  colored: PropTypes.bool.isRequired,
}

export default Section
