import React from 'react';
import { IconButton, Icon } from '@faststore/ui';
import styles from './customCartToggle.module.scss';

export function CustomCartToggle() {
  const handleClick = () => {
    console.log('Cart toggle clicked');
  };

  return (
    <div className={styles.customCartToggle}>
      <IconButton
        icon={<Icon name="ShoppingCart" />}
        aria-label="Cart"
        onClick={handleClick}
      />
    </div>
  );
}
