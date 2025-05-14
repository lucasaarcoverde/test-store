import React from 'react';
import { Icon } from '@faststore/ui';
import styles from './customSignInLink.module.scss';

export function CustomSignInLink() {
  return (
    <a href="/login" className={styles.customSignInLink}>
      <Icon name="User" />
      <span>Entrar</span>
    </a>
  );
}
