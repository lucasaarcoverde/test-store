import { SectionOverride } from "@faststore/core";
import { CustomRegionBar } from "../CustomRegionBar";

const SECTION = "RegionBar" as const;

const override: SectionOverride = {
  section: SECTION,
  components: {
    RegionBar: { Component: CustomRegionBar },
  },
};

export { override };
