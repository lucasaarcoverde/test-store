import React from 'react';
import { HeroImage } from '@faststore/ui';
import styles from './americanasHeroImage.module.scss';

export function AmericanasHeroImage() {
  return (
    <HeroImage className={styles.americanasHeroImage}>
      <img 
        src="https://www.americanas.com.br/_next/image?url=https%3A%2F%2Famericanas.vtexassets.com%2Fassets%2Fvtex.file-manager-graphql%2Fimages%2F979ccddd-0d83-4b00-91de-c28c0cf6fb39___e4b5b6fc090e2cfb72561010a2be326b.png&w=1440&q=90" 
        alt="Maratona da Diversão banner" 
        className={styles.image}
      />
    </HeroImage>
  );
}
