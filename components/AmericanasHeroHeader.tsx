import React from 'react';
import { HeroHeader } from '@faststore/ui';
import styles from './americanasHeroHeader.module.scss';

export function AmericanasHeroHeader() {
  // The hero in the screenshot doesn't have a visible header with text
  // This component is included for completeness but doesn't render visible content
  return (
    <HeroHeader className={styles.americanasHeroHeader}>
      <div className={styles.content}>
        {/* Header content would go here if needed */}
      </div>
    </HeroHeader>
  );
}
