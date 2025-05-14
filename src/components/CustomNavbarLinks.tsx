import React from 'react';
import { NavbarLinks, NavbarLinksList, NavbarLinksListItem } from '@faststore/ui';
import styles from './customNavbarLinks.module.scss';

export function CustomNavbarLinks() {
  const links = [
    { label: 'baixe o app', href: '/app' },
    { label: 'faça seu cartão', href: '/cartao' },
    { label: 'mais vendidos', href: '/mais-vendidos' },
    { label: 'nossas lojas', href: '/lojas' },
    { label: 'oba, cupom', href: '/cupons' },
    { label: 'americanas indica', href: '/indica' },
    { label: 'ofertas da TV', href: '/ofertas-tv' },
    { label: 'oferta do dia', href: '/oferta-do-dia' }
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
