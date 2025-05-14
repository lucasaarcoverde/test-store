import React from 'react';
import { Navbar, NavbarHeader, NavbarRow, NavbarButtons } from '@faststore/ui';
import styles from './customNavbar.module.scss';
import { CustomLogo } from './CustomLogo';
import { CustomSearchInput } from './CustomSearchInput';
import { CustomSignInLink } from './CustomSignInLink';
import { CustomCartToggle } from './CustomCartToggle';
import { CustomNavbarLinks } from './CustomNavbarLinks';

export function CustomNavbar() {
  return (
    <>
      <div className={styles.topBanner}>
        <div className={styles.topBannerContent}>
          <span>maratona da diversão</span>
          <span>•</span>
          <span>vai dar play? pausa na Americanas</span>
          <span>•</span>
          <span>com até 50% de desconto</span>
          <span>•</span>
          <span>queeero &gt;</span>
        </div>
      </div>
      <Navbar className={styles.customNavbar}>
        <NavbarHeader>
          <NavbarRow className={styles.navbarMainRow}>
            <CustomLogo />
            <CustomSearchInput />
            <div className={styles.navbarActions}>
              <CustomSignInLink />
              <a href="/stores" className={styles.storesLink}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                </svg>
              </a>
              <a href="/wishlist" className={styles.wishlistLink}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
                </svg>
              </a>
              <CustomCartToggle />
            </div>
          </NavbarRow>
        </NavbarHeader>
        <div className={styles.navbarSecondRow}>
          <div className={styles.locationInfo}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
            </svg>
            <span>informe seu CEP</span>
          </div>
          <CustomNavbarLinks />
        </div>
        <div className={styles.categoriesRow}>
          <a href="/mercado">mercado</a>
          <a href="/celulares">celulares</a>
          <a href="/eletrodomesticos">eletrodomésticos</a>
          <a href="/informatica">informática</a>
          <a href="/audio-e-video">áudio e vídeo</a>
          <a href="/eletroportateis">eletroportáteis</a>
          <a href="/moveis">móveis</a>
          <a href="/maratona-da-diversao" className={styles.highlighted}>maratona da diversão</a>
        </div>
        <div className={styles.appBanner}>
          <span>só no app você aproveita ofertas exclusivas</span>
          <span>•</span>
          <a href="/app">baixe agora &gt;</a>
        </div>
      </Navbar>
    </>
  );
}
