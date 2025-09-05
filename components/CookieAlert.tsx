import React from 'react';
import { Alert } from '@faststore/ui';
import styles from './cookieAlert.module.scss';

export function CookieAlert({ onClose }) {
  return (
    <Alert className={styles.cookieAlert} variant="info" onClose={onClose}>
      <div className={styles.cookieContent}>
        <span className={styles.cookieText}>
          <strong>Americanas e os cookies:</strong> a gente usa cookies para personalizar anúncios e melhorar a sua experiência no site. Ao continuar navegando, você concorda com o nosso <a href="#" className={styles.privacyLink}>Aviso de Privacidade</a>.
        </span>
        <div className={styles.buttonContainer}>
          <button onClick={onClose} className={styles.acceptButton}>Aceitar</button>
          <button className={styles.preferencesButton}>Preferências</button>
        </div>
      </div>
    </Alert>
  );
}
