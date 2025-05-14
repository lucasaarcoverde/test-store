import React from 'react';
import { HeroImage } from '@faststore/ui';
import styles from './customHeroImage.module.scss';

export function CustomHeroImage() {
  return (
    <HeroImage className={styles.customHeroImage}>
      <img 
        src="https://wepink.vtexassets.com/assets/vtex.file-manager-graphql/images/bce02200-3bee-4d05-8062-78a8ac3fe046___98a9e8e590e200d391903d8a89c96741.gif" 
        alt="Banner for kits promotion" 
      />
    </HeroImage>
  );
}