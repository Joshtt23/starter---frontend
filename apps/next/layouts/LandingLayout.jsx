import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/layouts/LandingLayout.module.css'

function LandingLayout({ children }) {
  return (
    <div className={styles.global}>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  )
}

export default LandingLayout
