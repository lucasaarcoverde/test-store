import { SectionOverride } from '@faststore/core';
import { AmericanasHero } from '../AmericanasHero';
import { AmericanasHeroImage } from '../AmericanasHeroImage';
import { AmericanasHeroHeader } from '../AmericanasHeroHeader';

const SECTION = 'Hero' as const;

const override: SectionOverride = {
  section: SECTION,
  components: {
    Hero: { Component: AmericanasHero },
    HeroImage: { Component: AmericanasHeroImage },
    HeroHeader: { Component: AmericanasHeroHeader },
  },
};

export { override };
