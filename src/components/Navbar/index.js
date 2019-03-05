import React from 'react'

import styles from './styles.module.css'
import logo from '../../images/katang.svg'

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.flex}>
      <img className={styles.logo} alt="Logo" src={logo} />
    </div>
  </nav>
)

export default Navbar
