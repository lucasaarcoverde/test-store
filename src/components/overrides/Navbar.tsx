import { SectionOverride } from '@faststore/core';
import { CustomNavbar } from '../CustomNavbar';

const SECTION = 'Navbar' as const;

const override: SectionOverride = {
  section: SECTION,
  components: {
    Navbar: { Component: CustomNavbar },
  },
};

export { override };
