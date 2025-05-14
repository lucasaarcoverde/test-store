import React from 'react';
import { Icon } from '@faststore/ui';
import styles from './customSignInLink.module.scss';

export function CustomSignInLink() {
  return (
    <div className={styles.customSignInLink}>
      <a href="/login" className={styles.signInButton}>
        <Icon name="User" />
        <span>Entrar</span>
      </a>
      <span className={styles.divider}>|</span>
      <a href="/register" className={styles.registerButton}>
        <span>Cadastrar</span>
      </a>
    </div>
  );
}
