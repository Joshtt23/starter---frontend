import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import Link from 'next/link'
import styles from '../styles/components/Header.module.css' // Adjust the path as needed
import { useFirebase } from '../../../packages/app/provider/firebase'
import ProfileDropdown from './ProfileDropdown'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user } = useFirebase()

  return (
    <nav className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">LOGO</Link>
      </div>
      <button
        className={styles.menuButton}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </button>
      <div className={styles.navContainer}>
        <ul className={styles.navLinks}>
          {/* List of navigation links */}
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/plans">Plans</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </div>
      {user ? (
        <div className={styles.authLinks}>
          <ProfileDropdown />
        </div>
      ) : (
        <div className={styles.authLinks}>
          {/* Authentication links */}
          <Link href="/login">Sign In</Link>
          <Link href="/register">Sign Up</Link>
        </div>
      )}
    </nav>
  )
}

export default Header
