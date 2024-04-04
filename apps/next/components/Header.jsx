import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi' // Import icons for the menu
import Link from 'next/link'
import styles from '../styles/components/Header.module.css' // Assume you have CSS module for styling

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className={styles.header}>
      <div className={styles.logo}>
        {/* TODO: Add your logo here */}
        <Link href="/">LOGO</Link>
      </div>
      <button
        className={styles.menuButton}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </button>
      <ul
        className={`${styles.navLinks} ${isMenuOpen ? styles.navActive : ''}`}
      >
        {/* List of navigation links */}
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        {/* TODO: Add more navigation links */}
        {/* Authentication links */}
        <li className={styles.authLink}>
          <Link href="/login">Sign In</Link>
        </li>
        <li className={styles.authLink}>
          <Link href="/register">Sign Up</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
