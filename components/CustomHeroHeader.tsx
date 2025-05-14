import React from 'react';
import { HeroHeader } from '@faststore/ui';
import styles from './customHeroHeader.module.scss';

export function CustomHeroHeader() {
  return (
    <HeroHeader className={styles.customHeroHeader}>
      <div className={styles.content}>
        <h1 className={styles.title}>kit sweet lady</h1>
        <p className={styles.subtitle}>Fragrâncias que combinam com você! Escolha a sua e economize!</p>
        <div className={styles.priceContainer}>
          <span className={styles.price}>R$ 26<span className={styles.cents}>90</span></span>
        </div>
        <a href="#" className={styles.cta}>Comprar agora</a>
      </div>
    </HeroHeader>
  );
}