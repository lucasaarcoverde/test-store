import { SectionOverride } from '@faststore/core';
import { CustomHero } from '../CustomHero';
import { CustomHeroImage } from '../CustomHeroImage';
import { CustomHeroHeader } from '../CustomHeroHeader';

const SECTION = 'Hero' as const;

const override: SectionOverride = {
  section: SECTION,
  components: {
    Hero: { Component: CustomHero },
    HeroImage: { Component: CustomHeroImage },
    HeroHeader: { Component: CustomHeroHeader },
  },
};

export { override };