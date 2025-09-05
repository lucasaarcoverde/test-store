import React from 'react';
import styles from './customBannerText.module.scss';

export function CustomBannerText({ children }) {
  return <div className={styles.bannerText}>{children}</div>;
}