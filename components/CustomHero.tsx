import React from 'react';
import { Hero } from '@faststore/ui';
import styles from './customHero.module.scss';

export function CustomHero({ children }) {
  return <Hero className={styles.customHero}>{children}</Hero>;
}