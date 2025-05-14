import React from 'react';
import { IconButton, Icon } from '@faststore/ui';
import { useCartToggleButton_unstable as useCartToggleButton } from '@faststore/core/experimental';
import styles from './customCartToggle.module.scss';

export function CustomCartToggle() {
  const { onClick, itemsInCart } = useCartToggleButton();

  return (
    <div className={styles.customCartToggle}>
      <IconButton
        icon={<Icon name="ShoppingCart" />}
        aria-label="Cart"
        onClick={onClick}
      />
      {itemsInCart > 0 && (
        <span className={styles.badge}>{itemsInCart}</span>
      )}
    </div>
  );
}
