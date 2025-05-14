import React from 'react';
import { NavbarLinks, NavbarLinksList, NavbarLinksListItem } from '@faststore/ui';
import styles from './customNavbarLinks.module.scss';

export function CustomNavbarLinks() {
  const links = [
    { label: 'best sellers', href: '/best-sellers' },
    { label: 'body splash', href: '/body-splash' },
    { label: 'perfumaria', href: '/perfumaria' },
    { label: 'body cream', href: '/body-cream' },
    { label: 'kits', href: '/kits' },
    { label: 'face', href: '/face' },
    { label: 'hair', href: '/hair' },
    { label: 'sale off', href: '/sale-off' },
    { label: 'lançamentos', href: '/lancamentos' }
  ];

  return (
    <NavbarLinks className={styles.customNavbarLinks}>
      <NavbarLinksList>
        {links.map((link) => (
          <NavbarLinksListItem key={link.label}>
            <a href={link.href}>{link.label}</a>
          </NavbarLinksListItem>
        ))}
      </NavbarLinksList>
    </NavbarLinks>
  );
}
