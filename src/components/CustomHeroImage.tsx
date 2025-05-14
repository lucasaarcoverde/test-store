import React from 'react';
import { HeroImage } from '@faststore/ui';
import styles from './customHeroImage.module.scss';

export function CustomHeroImage() {
  return (
    <HeroImage className={styles.customHeroImage}>
      <img 
        src="https://wepink.vtexassets.com/assets/vtex.file-manager-graphql/images/1c3bc59a-812d-4097-801a-861272fa0f6d___5b73aa108488ad6ef11e43cb6ce3823b.gif" 
        alt="Promotional banner for kits" 
      />
    </HeroImage>
  );
}