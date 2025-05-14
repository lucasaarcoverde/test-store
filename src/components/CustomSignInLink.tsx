import React from 'react';
import styles from './customSignInLink.module.scss';

export function CustomSignInLink() {
  return (
    <div className={styles.customSignInLink}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
      </svg>
      <div className={styles.signInText}>
        <span>olá, faça seu login</span>
        <span>ou cadastre-se</span>
      </div>
    </div>
  );
}
