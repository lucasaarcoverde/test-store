import React from 'react';
import { HeroHeader } from '@faststore/ui';
import styles from './customHeroHeader.module.scss';

export function CustomHeroHeader() {
  return (
    <HeroHeader className={styles.customHeroHeader}>
      <div className={styles.content}>
        <h1 className={styles.title}>kit sweet lady</h1>
        <p className={styles.subtitle}>Combinação perfeita para o seu dia a dia</p>
        <p className={styles.description}>Dois fragrâncias que encantam!</p>
        <div className={styles.priceContainer}>
          <span className={styles.currency}>R$</span>
          <span className={styles.price}>26</span>
          <span className={styles.cents}>90</span>
        </div>
        <button className={styles.button}>Comprar agora</button>
      </div>
    </HeroHeader>
  );
}