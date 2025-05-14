import React from 'react';
import { IconButton, Icon } from '@faststore/ui';
import styles from './customCartToggle.module.scss';

export function CustomCartToggle() {
  // In a real implementation, this would use the FastStore hook
  // const { onClick, itemsInCart } = useCartToggleButton();
  const onClick = () => console.log('Cart clicked');
  const itemsInCart = 0;

  return (
    <div className={styles.customCartToggle}>
      <IconButton
        icon={<Icon name="ShoppingCart" />}
        aria-label="Cart"
        onClick={onClick}
        className={styles.cartButton}
      />
      {itemsInCart > 0 && (
        <span className={styles.badge}>{itemsInCart}</span>
      )}
    </div>
  );
}
