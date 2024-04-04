// Assuming this is located in your components directory
import React from 'react'
import Link from 'next/link'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaTwitterSquare,
  FaInstagramSquare,
} from 'react-icons/fa' // Example social media icons
import styles from '../styles/components/Footer.module.css' // Updated import path

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoColumn}>
        {/* TODO: Add your logo here*/}
        <Link href="/">
          <img
            src="/path-to-your-logo.svg"
            alt="Logo"
            className={styles.logo}
          />
        </Link>
        {/* TODO: Add copyright here */}
        <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
        <p>
          {/* TODO: Add your contact email */}
          <Link href="mailto:support@example.com">support@example.com</Link>
        </p>
      </div>
      <div className={styles.column}>
        <h4>Legal</h4>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms-of-service">Terms of Service</Link>
        {/* Additional legal links */}
      </div>
      <div className={styles.column}>
        <h4>Support</h4>
        <Link href="/contact">Contact Us</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/user-guide">User Guide</Link>
        {/* Additional support links */}
      </div>
      <div className={styles.column}>
        <h4>About</h4>
        <Link href="/about">About Us</Link>
        <Link href="/services">Services</Link>
        <Link href="/testimonials">Testimonials</Link>
        {/* Additional about links */}
      </div>
      {/* TODO: Add social media links */}
      <div className={styles.socialMedia}>
        <Link href="https://facebook.com">
          <FaFacebookF />
        </Link>
        <Link href="https://twitter.com">
          <FaTwitterSquare style={{ borderRadius: 10 }} />
        </Link>
        <Link href="https://instagram.com">
          <FaInstagramSquare style={{ borderRadius: 10 }} />
        </Link>
        <Link href="https://linkdin.com">
          <FaLinkedinIn />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
