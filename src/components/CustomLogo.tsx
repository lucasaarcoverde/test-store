import React from 'react';
import styles from './customLogo.module.scss';

export function CustomLogo({ link = "/" }) {
  return (
    <a href={link} className={styles.customLogo}>
      <img 
        src="https://www.americanas.com.br/_next/static/media/storeLogoIcon.0f542fa4.svg" 
        alt="Americanas" 
        className={styles.logoIcon} 
      />
      <span className={styles.logoText}>americanas</span>
    </a>
  );
}
