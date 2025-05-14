import React from 'react';
import styles from './customBannerTextContent.module.scss';

export function CustomBannerTextContent() {
  return (
    <div className={styles.bannerTextContent}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>
          <span className={styles.mainTitle}>maratona da</span>
          <span className={styles.secondTitle}>diversão<span className={styles.emoji}>😎</span></span>
        </h2>
        <p className={styles.subtitle}>vai dar play? pausa na Americanas</p>
      </div>
      
      <div className={styles.imageContainer}>
        <div className={styles.productsImage}></div>
      </div>
      
      <div className={styles.discountContainer}>
        <div className={styles.discountText}>
          <span className={styles.comAte}>com até</span>
          <span className={styles.percent}>50%</span>
          <span className={styles.deDesconto}>de desconto</span>
        </div>
        <a href="#" className={styles.actionButton}>aproveite</a>
      </div>
    </div>
  );
}