import { SectionOverride } from '@faststore/core';
import { CookieAlert } from '../CookieAlert';

const SECTION = 'Alert' as const;

const override: SectionOverride = {
  section: SECTION,
  components: {
    Alert: { Component: CookieAlert },
  },
};

export { override };
