import React from 'react';
import { Navbar, NavbarHeader, NavbarRow, NavbarButtons } from '@faststore/ui';
import styles from './customNavbar.module.scss';
import { CustomLogo } from './CustomLogo';
import { CustomSearchInput } from './CustomSearchInput';
import { CustomSignInLink } from './CustomSignInLink';
import { CustomCartToggle } from './CustomCartToggle';
import { CustomNavbarLinks } from './CustomNavbarLinks';

export function CustomNavbar() {
  return (
    <Navbar className={styles.customNavbar}>
      <NavbarHeader>
        <NavbarRow>
          <CustomLogo />
          <CustomSearchInput />
          <NavbarButtons>
            <CustomSignInLink />
            <CustomCartToggle />
          </NavbarButtons>
        </NavbarRow>
      </NavbarHeader>
      <CustomNavbarLinks />
    </Navbar>
  );
}
