import Link from 'next/link';
import React from 'react'
import { Info } from '../../types/apiType'
import styles from './pagination.module.css';

export const Pagination = ({ info, page }:{info:Info, page:number}) => {
  const { next, prev } = info; 
  let from = 0;
  if(page >= 10 ) from = page - 9;

  return (
    <div className={styles.container}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={prev ? styles.icons : `${styles.icons} ${styles.iconsDisable}`}>
        <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
      </svg>
      { Array.from({length: info.pages}, (_, i) => i + 1)
          .splice(from,10)
          .map(n => <Link key={n} href={`/characters?page=${n}`}><span className={ n === page ? styles.currentPage : ''}>{n}</span></Link>)
      }
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={next ? styles.icons : `${styles.icons} ${styles.iconsDisable}`}>
        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />  
      </svg>


    </div>
  )
}
