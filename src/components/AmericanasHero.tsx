import React from 'react';
import { Hero } from '@faststore/ui';
import styles from './americanasHero.module.scss';

export function AmericanasHero({ children }) {
  return <Hero className={styles.americanasHero}>{children}</Hero>;
}
