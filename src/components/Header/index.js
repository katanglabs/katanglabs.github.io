import React from 'react'

import Navbar from '../Navbar'
import Section from '../Section'

import styles from './styles.module.css'

import hero from '../../images/hero.jpg'

const Header = () => (
  <Section colored>
    <Navbar />
    <div className={styles.header}>
      <img alt="Screenshot of SkyAI" src={hero} className={styles.hero} />

      <div className={styles.pull}>
        <h1
          style={{
            margin: '8rem 0 4rem',
          }}
        >
          We’re building the security systems of tomorrow.
        </h1>
        <p className={styles.subtitle}>
          We’re a <a href="https://www.conradchallenge.org">Conrad Challenge</a>{' '}
          team building SkyAI: a smart, automated security system.
        </p>
        <a
          href="mailto:katanglabs@gmail.com"
          className="button"
          style={{ marginTop: '5rem' }}
        >
          Say hello
        </a>
      </div>
    </div>
  </Section>
)

export default Header
