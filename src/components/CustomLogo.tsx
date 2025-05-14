import React from 'react';
import styles from './customLogo.module.scss';

export function CustomLogo({ link = '/' }) {
  return (
    <a href={link} className={styles.customLogo}>
      <img 
        src="https://wepink.vtexassets.com/assets/vtex/assets-builder/wepink.store-theme/3.1.11/svg/logo-primary___5bd0e7fa6451ba181395889123dfe00a.svg" 
        alt="WePink" 
      />
    </a>
  );
}
