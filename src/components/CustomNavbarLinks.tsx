import React from 'react';
import { NavbarLinks, NavbarLinksList, NavbarLinksListItem } from '@faststore/ui';
import styles from './customNavbarLinks.module.scss';

export function CustomNavbarLinks() {
  const links = [
    { label: 'Lançamentos', href: '/lancamentos' },
    { label: 'Body splash', href: '/body-splash' },
    { label: 'Perfumaria', href: '/perfumaria' },
    { label: 'Body lotion', href: '/body-lotion' },
    { label: 'Kits', href: '/kits' },
    { label: 'Outlet', href: '/outlet' },
    { label: 'Mais', href: '/mais' },
    { label: 'Marcas', href: '/marcas' }
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
