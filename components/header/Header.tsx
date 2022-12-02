import React from 'react'
import { Navbar } from './nav/Navbar'
import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.h1}>Rick & Morty API</h1>
      <Navbar />
    </div>
  )
}
