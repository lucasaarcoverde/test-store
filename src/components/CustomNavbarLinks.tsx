import React from 'react';
import { NavbarLinks, NavbarLinksList, NavbarLinksListItem } from '@faststore/ui';
import styles from './customNavbarLinks.module.scss';

export function CustomNavbarLinks() {
  const links = [
    { label: 'Lançamentos', href: '/lancamentos' },
    { label: 'Body splash', href: '/body-splash' },
    { label: 'Perfumaria', href: '/perfumaria' },
    { label: 'Skincare', href: '/skincare' },
    { label: 'Body cream', href: '/body-cream' },
    { label: 'Kits', href: '/kits' },
    { label: 'Mãe', href: '/mae' },
    { label: 'Outlet', href: '/outlet' },
    { label: 'Sobre', href: '/sobre' }
  ];

  return (
    <NavbarLinks className={styles.customNavbarLinks}>
      <NavbarLinksList className={styles.linksList}>
        {links.map((link) => (
          <NavbarLinksListItem key={link.label} className={styles.linksListItem}>
            <a href={link.href}>{link.label}</a>
          </NavbarLinksListItem>
        ))}
      </NavbarLinksList>
    </NavbarLinks>
  );
}
